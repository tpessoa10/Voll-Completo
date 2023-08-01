import styled from 'styled-components'
import ImagemDeFundo from './ImagemDeFundo.png'
import { Outlet } from 'react-router-dom'

const ContainerPrincipal = styled.div`
    background-image:url(${ImagemDeFundo});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    background-color: white;
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export default function PaginaBaseFormulario(){
    return (
        <ContainerPrincipal>
            <Container>
                <Outlet/>
            </Container>
        </ContainerPrincipal>
    )
}

