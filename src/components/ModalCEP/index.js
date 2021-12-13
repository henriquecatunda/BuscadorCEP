import React, { useState, useEffect } from 'react';
import { Modal, Row} from 'react-bootstrap';
import Button from '../../components/Button';
import api from '../../Api/Api';


export default function ModalCEP(props) {

  const {cep} = props;
  
  const [cepAtivity, setcepAtivity] = useState(false);
  const [dadosCep, setDadosCep] = useState('')

  const getCEP = () => {
    
      api.get(`${cep}/json`)
      .then((response) => {
        setDadosCep(response.data);
        console.log(response.data);
      }).catch((error) => console.log(error))
    }


    useEffect(() => {

     getCEP();
  
    }, [cep])   

    const verificarCep = (cep) => {

      if(cep.length !== 0 && cep.length === 8){
        setcepAtivity(true);
      }else{
      alert('campo vazio OU somente números')
      }
    }


  return (
    <>
      <Button title="Buscar" onClick={(a) => verificarCep(cep) }/>

      <Modal show={cepAtivity} onHide={() => setcepAtivity(false)}>

      <Modal.Header>
          <Modal.Title>Resultado-CEP </Modal.Title>
        </Modal.Header>

      <Modal.Body>
           <Row>
             Logradouro: {dadosCep.logradouro}  
          </Row>
          <Row>
              Município/UF: {`${dadosCep.localidade}/${dadosCep.uf}`}
          </Row>
          <Row>
             Bairro: {dadosCep.bairro}
          </Row>
          <Row>
              CEP:  {dadosCep.cep}     
          </Row>
      </Modal.Body>

      <Modal.Footer>
          <Button  title="Voltar"   onClick={() => setcepAtivity(false)}/>
      </Modal.Footer>
      </Modal>
    </>
  );


}