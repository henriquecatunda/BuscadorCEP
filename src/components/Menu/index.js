import { Container, Title, Box,MenuTitle } from "./styles"
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Menu(props) {

    let location = useLocation();

    const { titleMenu, titleCep, titleEnd} = props;

    return (

        <Container>


            <Title>
                {titleMenu}
            </Title>

          
                <Box>
                    <Link to={'/buscarCEP'} style={{ paddingLeft: 13, textDecoration: 'none' }} >
                        <MenuTitle> {titleCep} </MenuTitle>
                    </Link>

                    <Link to={'/buscarEndereço'} style={{ paddingLeft: 13, textDecoration: 'none' }} >
                        <MenuTitle> {titleEnd} </MenuTitle>
                    </Link>
                </Box>
           

        </Container>
    );

}
