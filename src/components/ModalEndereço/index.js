import React, { useState, useEffect } from 'react';
import { Modal, Row} from 'react-bootstrap';
import Button from '../../components/Button';
import api from '../../Api/Api';


export default function BuscarEndereço(props) {

  const {estado, municipio, logradouro} = props;
  
  const [deleteAtivity, setDeleteAtivity] = useState(false);
  const [dadosCep, setDadosCep] = useState('')

  const getCEP = () => {
    
      api.get(`${estado}/${municipio}/${logradouro}/json`)
      .then((response) => {
        setDadosCep(response.data);
        console.log(response.data);
      }).catch((error) => console.log(error))
    }


    useEffect(() => {

     getCEP();
  
    }, [estado, municipio, logradouro])   

    const verificarCep = () => {

      if(estado.length !== 0 && municipio.length !== 0  && logradouro.length !== 0){
        setDeleteAtivity(true);
      }else{
      alert('Informar todos os campos')
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
        { dadosCep && dadosCep.map(dados => ( 
          <>
          <Row>
              CEP:  {dados.cep}     
          </Row>
          <Row>
             Código: {dados.siafi}
          </Row>
          <Row>
              Município: {dados.localidade}
          </Row>
           <Row>
             Logradouro: {dados.logradouro}  
          </Row>
          </>
        ))}
      </Modal.Body>

      <Modal.Footer>
          <Button  title="Voltar"   onClick={() => setDeleteAtivity(false)}/>
      </Modal.Footer>
      </Modal>
    </>
  );


}