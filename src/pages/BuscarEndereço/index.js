import React, { useEffect, useState } from 'react'
import { Container, Title, BoxButton, Card } from "./styles";
import PageDefault from '../../components/PageDefaulf';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import ModalEndereço from '../../components/ModalEndereço/index'
import {Form,Col} from "react-bootstrap"
import axios from 'axios';

export default function BuscarEndereço() {

    const [estado, setEstado] = useState('');
    const [dadosEstado, setDadosEstado] = useState('');
    const [municipio, setMunicipio] = useState('crateús');
    const [dadosMunicipio, setDadosMunicipio] = useState('');
    const [logradouro, setLogradouro] = useState('Rua Francisco Maciel Azevedo Melo');


    const getEstados = () => {
    
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
        .then((response) => {
            setDadosEstado(response.data);
          console.log(response.data);
        }).catch((error) => console.log(error))
    }

    const getMunicipio = () => {
    
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
        .then((response) => {
            setDadosMunicipio(response.data);
          console.log(response.data);
        }).catch((error) => console.log(error))
    }
  
  
      useEffect(() => {
  
        getEstados();
        getMunicipio();
    
      }, [estado])   


    const typeData = [
        { name: 'PDF',  category: 'pdf' },
        { name: 'Arquivo',  category: 'file' },
        { name: 'Descrição',  category: 'text' },
        { name: 'Link',  category: 'link' },
      ];


    return (

        <PageDefault>

            <Container>

                <div>
                    <Link to={'/'} style={{ textDecoration: 'none' }} > Home - </Link>
                    <Link to={'/buscarEndereço'} style={{ textDecoration: 'none' }}> BuscarEndereço </Link>
                </div>

                <Card >

                    <Col sm={12}>
                        <Form.Label>Estado</Form.Label>
                        <Form.Select
                            placeholder={estado}
                            as="select"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)} >

                            {dadosEstado && dadosEstado.map((e, i) => <option key={i} value={e.sigla}>{e.nome}</option>)}

                        </Form.Select>
                    </Col>

                    <Col sm={12}>
                        <Form.Label>Municipio</Form.Label>
                        <Form.Select
                            placeholder={municipio}
                            as="select"
                            value={municipio}
                            onChange={(e) => setMunicipio(e.target.value)} >

                            {dadosMunicipio && dadosMunicipio.map((m, i) => <option key={i} value={m.nome}>{m.nome}</option>)}

                        </Form.Select>
                    </Col>

                    <Input title="Logradouro *" value={logradouro} onChange={(e) => setLogradouro(e.target.value)} required />
        
                    <BoxButton>
                        <Link to={'/'} style={{ textDecoration: 'none' }} >
                            <Button title="Voltar" />
                        </Link>

                        <ModalEndereço estado={estado} municipio={municipio} logradouro={logradouro} />

                    </BoxButton>

                </Card>

            </Container>

        </PageDefault>

    );
}
