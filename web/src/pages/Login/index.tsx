import { useState } from "react";
import CampoDigitacao from "../../components/CampoDigitacao";
import TituloLogin from '../../components/TituloLogin/index'
import styled from "styled-components";
import Botao from "../../components/Botao";
import { Link } from "react-router-dom";
import Logo from '../../components/Cabecalho/assets/logo.png'

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%
`   
const BotaoCustomizado = styled(Botao)`
    width: 40%
`

const Paragrafo = styled.p`
    font-weight: 400;
    color: var(--azul-escuro);
    font-size: 16px;
    line-height: 19px;
`

const ParagrafoCadastro = styled(Paragrafo)`
    color: var(--cinza);
`

const LinkCustomizado = styled(Link)`
    color: var(--azul-claro);
    text-decoration: none;
    font-weight: 700;
`

const Imagem = styled.img`
    padding: 1.5em 0 2em 0;
`


export default function Login () {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
            <>
            <Imagem src={Logo} style={{paddingBottom: 20}} alt="Logo empresa Voll" />
            <TituloLogin>Faça login em sua conta</TituloLogin>
            <Formulario>
                <CampoDigitacao valor={email} tipo="text" placeholder="Insira seu endereço de email" onChange={setEmail} label="Email" />
                <CampoDigitacao valor={senha} tipo="password" placeholder="Insira sua senha" onChange={setSenha} label="Senha" />
                <BotaoCustomizado type="submit">Entrar</BotaoCustomizado>
            </Formulario>
            <Paragrafo style={{color: '##191970' }}>Esqueceu sua senha ?</Paragrafo>
            <ParagrafoCadastro>Ainda não tem conta? <LinkCustomizado to="/cadastro">Faça seu cadastro!</LinkCustomizado></ParagrafoCadastro>
           </>
    )
}