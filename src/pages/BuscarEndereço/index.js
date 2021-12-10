import React, { useEffect, useState } from 'react'
import { Container, Title,BoxButton, Card} from "./styles";
import PageDefault from '../../components/PageDefaulf';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import  Input from '../../components/Input';
import ModalEndereço from '../../components/ModalEndereço/index'

export default function BuscarEndereço() {

    const [estado, setEstado] = useState('');
    const [municipio, setMunicipio] = useState('crateús');
    const [logradouro, setLogradouro] = useState('Rua Francisco Maciel Azevedo Melo');


    return (

        <PageDefault>

            <Container>

                <div>
                    <Link to={'/'} style={{ textDecoration: 'none' }} > Home - </Link>
                    <Link to={'/buscarEndereço'} style={{ textDecoration: 'none' }}> BuscarEndereço </Link>
                </div>

                <Card >

                    <Input title="CEP *" value={estado} onChange={(e) => setEstado(e.target.value)} required />

                    <Input title="CEP *" value={municipio} onChange={(e) => setMunicipio(e.target.value)} required />

                    <Input title="CEP *" value={logradouro} onChange={(e) => setLogradouro(e.target.value)} required />

                    <BoxButton>
                        <Link to={'/'} style={{ textDecoration: 'none' }} >
                            <Button title="Voltar" />
                        </Link>

                        <ModalEndereço estado={estado} municipio={municipio} logradouro={logradouro}/> 

                    </BoxButton>

                </Card>

            </Container>

        </PageDefault>

    );
}
