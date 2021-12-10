import styled from 'styled-components';

export const Container = styled.div`
    width: 75%;
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 55px 0;
`;

export const Title = styled.div`
 
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    display: flex;
    color: #171717;
    margin-top: 45px;

    @media (max-width: 425px){
       font-size: 16px;
    }
    
`;


export const Description = styled.div`

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    align-items: center;
    color: #242424;
    margin-top: 30px;

    @media (max-width: 425px){
       font-size: 14px;
    }
    
`;



export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-right: 15px;
    margin-top: 55px;
    
`;

