import React, { useEffect, useState } from 'react'
import { Container, Title,BoxButton, Card} from "./styles";
import PageDefault from '../../components/PageDefaulf';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import  Input from '../../components/Input';
import ModalCEP from '../../components/ModalCEP/index'


export default function BuscarCEP() {


    const [cep, setCep] = useState('');

    return (

        <PageDefault>

            <Container>

                <div>
                      <Link to={'/'} style={{ textDecoration: 'none' }} > Home - </Link>
                      <Link to={'/buscarCEP'} style={{ textDecoration: 'none' }}> BuscarCEP </Link>
                </div>

                <Card >

                    <Input type="number" title="CEP *" value={cep} onChange={(e) => setCep(e.target.value)} required/>

                    <BoxButton>
                         <Link to={'/'} style={{ textDecoration: 'none' }} >
                              <Button title="Voltar"/>
                        </Link>
                   
                        <ModalCEP cep={cep}/>
                   
                    </BoxButton>

                </Card>

            </Container>

        </PageDefault>

    );
}
