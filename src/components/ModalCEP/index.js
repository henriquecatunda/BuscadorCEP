import React, { useState, useEffect } from 'react';
import { Modal, Row} from 'react-bootstrap';
import Button from '../../components/Button';
import api from '../../Api/Api';


export default function ModalCEP(props) {

  const {cep} = props;
  
  const [deleteAtivity, setDeleteAtivity] = useState(false);
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

    const verificarCep = () => {

      if(cep !== ' ' && cep.length === 8){
        setDeleteAtivity(true);
      }else{
      alert('campo vazio')
      }
    }


  return (
    <>
      <Button title="Buscar" onClick={(a) => verificarCep() }/>

      <Modal show={deleteAtivity} onHide={() => setDeleteAtivity(false)}>

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
          <Button  title="Voltar"   onClick={() => setDeleteAtivity(false)}/>
      </Modal.Footer>
      </Modal>
    </>
  );


}