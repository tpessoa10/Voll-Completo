import styled from 'styled-components'
import Logo from '../../components/Cabecalho/assets/logo.png'
import { Step, StepLabel, Stepper } from '@mui/material'
import { useState } from 'react';
import CampoDigitacao from '../../components/CampoDigitacao';


const Imagem = styled.img`
    padding: 1.5em 0 2em 0;
`
interface PropsCustomizadas{
    cor: string;
}

const StepCustomizada = styled.div<PropsCustomizadas>`
    background-color: ${({cor}) => cor};
    width: 16px;
    height: 16px;
    border-radius: 50%;
`

const Titulo = styled.h2`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: var(--cinza);
`

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%
`

export default function Cadastro(){
    const [etapaAtiva, setEtapaAtiva] = useState(0)
    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setEtapaAtiva(etapaAtiva + 1)
    }

    return (
        <>
            <Imagem src={Logo} alt='Logo da Voll'/>
            <Stepper activeStep={etapaAtiva}>
                <Step>
                    <StepLabel StepIconComponent={(props) => (
                        <StepCustomizada cor={props.active ? 'lightblue' : 'lightgray'} />
                    )}/>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={(props) => (
                        <StepCustomizada cor={props.active ? 'lightblue' : 'lightgray'} />
                    )}/>
                </Step>
            </Stepper> 
            <Titulo>Primeiro, alguns dados básicos</Titulo>
            <Formulario>
                <CampoDigitacao tipo='text' valor={nome} placeholder='Insira o nome da clínica' onChange={setNome} label='Nome'/>
                <CampoDigitacao tipo='text' valor={cnpj} placeholder='Insira o CNPJ' onChange={setCnpj} label='CNPJ'/>
            </Formulario>
        </>
    )
}

