import styled from "styled-components"
import escudo from './assets/escudo.png'
import calendario from './assets/calendario.png'
import sino from './assets/sino.png'
import like from './assets/like.png'

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 60%;
`
const Bloco = styled.div`
    width: 20%;
    background-color: var(--cinza-claro);
    padding: 16px 8px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
`

const Titulo = styled.p`
    line-height: 19px;
    color: var(--azul-escuro);
`

export default function Atividades(){
    return (
        <Container>
            <Bloco>
                <img src={escudo} alt="Escudo" />
                <Titulo>Encontre Especialistas</Titulo>
            </Bloco>
            <Bloco>
                <img src={calendario} alt="Calendário" />
                <Titulo>Agende Consultas</Titulo>
            </Bloco>
            <Bloco>
                <img src={sino} alt="Sino" />
                <Titulo>Defina lembretes</Titulo>
            </Bloco>
            <Bloco>
                <img src={like} alt="Like" />
                <Titulo>Avalie o serviço</Titulo>
            </Bloco>
        </Container>
    )
}