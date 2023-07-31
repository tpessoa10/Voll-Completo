import styled from "styled-components";
import Banner from "./Banner";
import Formulario from "./Pesquisa";
import Atividades from "./Atividades";
import Depoimentos from "./Depoimentos";

function PaginaInicial(){
    const Container = styled.section `
        display: flex;
        flex-direction: column;
        align-items: center;
    `


    return (
        <>
            <Banner/>
            <Container>
                <Formulario/>
                <Atividades/>
                <Depoimentos/>
            </Container>
        </>
    )
}

export default PaginaInicial;