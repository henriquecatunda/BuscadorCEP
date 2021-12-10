import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    padding: 0 150px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background-color: #FFFFFF;
    box-shadow: 0px 0.993868px 22.1709px rgba(0, 0, 0, 0.08);


    @media (max-width: 425px){
       padding: 8px 20px;
       flex-direction: column;
       height: 100px;
       justify-content: space-evenly;
    }
`;

export const Title = styled.div`
    
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    display: flex;
    align-items: center;
    color: #23C787;

    @media (max-width: 425px){
       font-size: 14px;
    }
`;

export const Box = styled.div`
    
    margin-right: 20px;
    display: flex;
`;

export const MenuTitle = styled.div`
    
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    color: black;
`;