import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

function PageDefault({children}) {

return (
    <>
        <Menu titleMenu="BuscadorCEP"  titleEnd="Buscar Endereço" titleCep="Buscar CEP"  />
           
            {children}
          
        <Footer/>
    </>

    );
}

export default PageDefault;