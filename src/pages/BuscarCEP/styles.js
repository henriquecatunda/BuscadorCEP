import styled from 'styled-components';

export const Container = styled.div`
    width: 75%;
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 55px 0;
`;

export const Card = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    box-sizing: border-box;
    background-color:  #FFFFFF;
    margin: 40px  auto;
    box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);
    border-radius: 8px;
    flex-direction: column;
    align-items: flex-start;
    padding: 45px 55px;
`;


export const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    justify-content: flex-start;
    color: #302E45;
    margin-top: 15px;
`;


export const BoxButton = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px auto;
`;
