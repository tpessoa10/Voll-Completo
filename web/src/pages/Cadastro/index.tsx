import styled from 'styled-components'
import Logo from '../../components/Cabecalho/assets/logo.png'
import { Step, StepLabel, Stepper } from '@mui/material'
import { useState } from 'react';
import CampoDigitacao from '../../components/CampoDigitacao';

const BotaoEstilizado = styled.button`
    width: 40%;
    background-color: var(--azul-escuro);
    border-radius: 8px;
    padding: 12px 16px;
    color: var(--branco);
    border: none;
    margin-top: 1em;
    font-weight: 700;
    line-height: 19px;
`


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

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%
`
const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 33% 65%;
    justify-content: space-between
`

export default function Cadastro(){
    const [etapaAtiva, setEtapaAtiva] = useState(0)
    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaVerificada, setSenhaVerificada] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [estado, setEstado] = useState('')

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
                <CampoDigitacao tipo='text' valor={email} placeholder='Insira o Email' onChange={setEmail} label='Email'/>
                <CampoDigitacao tipo='password' valor={senha} placeholder='Digite sua senha' onChange={setSenha} label='Crie uma senha'/>
                <CampoDigitacao tipo='password' valor={senhaVerificada} placeholder='Digite sua senha novamente' onChange={setSenhaVerificada} label='Repita a senha'/>
                <BotaoEstilizado type='submit'>Avançar</BotaoEstilizado>
            </Formulario>
            <Titulo>Agora, os dados técnicos</Titulo>
            <Formulario>
                <CampoDigitacao tipo='tel' valor={telefone} placeholder='(DDD)XXXXX-XXXX' onChange={setTelefone} label='Telefone'/>
                <CampoDigitacao tipo='number' valor={cep} placeholder='Informe o CEP' onChange={setCep} label='CEP'/>
                <CampoDigitacao tipo='text' valor={rua} placeholder='Rua' onChange={setRua} label='Endereço'/>
                <Container>
                    <CampoDigitacao tipo='number' valor={numero} placeholder='Número' onChange={setNumero}/>
                    <CampoDigitacao tipo='text' valor={complemento} placeholder='Complemento' onChange={setComplemento}/>
                    <CampoDigitacao tipo='text' valor={estado} placeholder='Estado' onChange={setEstado}/>
                </Container>
                <BotaoEstilizado type='submit'>Cadastrar</BotaoEstilizado>
            </Formulario>
        </>
    )
}

