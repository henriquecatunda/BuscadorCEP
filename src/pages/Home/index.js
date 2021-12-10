import React, { useEffect, useState } from 'react'
import { Container, Title, Description, Box } from "./styles";
import PageDefault from '../../components/PageDefaulf';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

export default function Home() {

    return (

        <PageDefault>

            <Container>

                <Title>
                    Bem vindo ao BuscadorCEP
                </Title>

                <Description>
                    O oplicativo BuscadorCEP!  permite que você encontre códigos de endereçamento postais (CEP). <br />
                    Se você já tiver o CEP em mãos e gostaria de buscar seu endereço, o BuscadorCEPI também vai te ajudar.
                </Description>

                <Box>
                    <Link to={'/buscarCEP'} style={{ textDecoration: 'none' }} >
                        <Button title="Buscar CEP" />
                   </Link>

                    <Link to={'/buscarEndereço'} style={{ textDecoration: 'none' }} >
                        <Button title="Buscar Endereço" />
                    </Link>
               </Box>

        </Container>

        </PageDefault >

    );
}
