import { Modal, Box, FormGroup, Switch, FormControlLabel, Checkbox } from "@mui/material";
import Titulo from "../../../components/Titulo";
import styled from "styled-components";
import CampoDigitacao from "../../../components/CampoDigitacao";
import { useState } from "react";
import Subtitulo from "../../../components/Subtitulo";
import Botao from "../../../components/Botao";
import IProfissional from "../../../types/IProfissional";
import usePost from "../../../usePost";
import autenticaStore from "../../../stores/autentica.stores";


const BoxCustomizado = styled(Box)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    max-height: 90vh;
    overflow-y: auto;
    background-color: white;
    border: none;
    border-radius: 16px;
    padding: 1em 5em;
`

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 65% 33%;
    justify-content: space-between
`

const ContainerSwitch = styled.div`
    text-align: center;
`

const TextoSwitch = styled.p`
    color: var(--cinza);
`

const BotaoCustomizado = styled(Botao)`
    width: 50%;
    display: block;
    margin: 0 auto;
`

export default function ModalCadastro({open, handleClose}: {open: boolean, handleClose: () => void}){
    const [planosSelecionados, setPlanosSelecionados] = useState<string[]>([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaVerificada, setSenhaVerificada] = useState('')
    const [possuiPlano, setPossuiPlano] = useState(false)
    const [imagem, setImagem] = useState('')
    const [especialidade, setEspecialidade] = useState('')
    const [crm, setCrm] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('') 
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [estado, setEstado] = useState('')
    const label = {inputProps: {'aria-label':'atende por plano?'}}
    const {cadastrarDados} = usePost()
    const {usuario} = autenticaStore

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkboxValue = event.target.value
        if(event.target.checked) {
            setPlanosSelecionados([...planosSelecionados, checkboxValue])
        } else{
            setPlanosSelecionados(planosSelecionados.filter(plano => plano !== checkboxValue))
        }
    }

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const profissional: IProfissional = {
            nome: nome,
            crm: crm,
            especialidade: especialidade,
            possuiPlanoSaude: possuiPlano,
            estaAtivo: true,
            senha: senha,
            planoSaude: planosSelecionados,
            imagem: imagem,
            email: email,
            telefone: telefone,
            endereco:{
                cep: cep,
                rua: rua,
                estado: estado,
                numero: numero,
                complemento: complemento
            }
        }

        await cadastrarDados({url:"especialista", dados: profissional, token: usuario.token})
    }

    return(
        <Modal open={open} onClose={handleClose} aria-LabelLedby="Modal de cadastro do especialista" aria-describedby="Nesse modal terá os dados de cadastro do especialista">
            <BoxCustomizado>
                <Titulo>Cadastre o especialista inserindo os dados abaixo:</Titulo>
                <form onSubmit={handleSubmit}>
                    <CampoDigitacao  tipo="text" valor={nome} placeholder="Digite seu nome completo" onChange={setNome} label="Nome"/>
                    <CampoDigitacao  tipo="text" valor={email} placeholder="Digite seu enredeço de email" onChange={setEmail} label="Email"/>
                    <CampoDigitacao  tipo="password" valor={senha} placeholder="Digite sua senha" onChange={setSenha} label="Crie uma senha"/>
                    <CampoDigitacao  tipo="password" valor={senhaVerificada} placeholder="Repita sua senha anterior" onChange={setSenhaVerificada} label="Repita a senha"/>
                    <CampoDigitacao  tipo="text" valor={especialidade} placeholder="Qual a sua especialidade?" onChange={setEspecialidade} label="Especialidade"/>                    <CampoDigitacao  tipo="number" valor={crm} placeholder="Insira seu número de registro" onChange={setCrm} label="CRM"/>
                    <CampoDigitacao  tipo="tel" valor={telefone} placeholder="Insira seu número de telefone" onChange={setTelefone} label="Telefone"/>
                    <CampoDigitacao  tipo="number" valor={cep} placeholder="CEP" onChange={setCep} label="Endereço"/>
                    <Container>
                        <CampoDigitacao  tipo="text" valor={rua} placeholder="Rua" onChange={setRua}/>
                        <CampoDigitacao  tipo="number" valor={numero} placeholder="Número" onChange={setNumero}/>
                        <CampoDigitacao  tipo="text" valor={complemento} placeholder="Complemeento" onChange={setComplemento}/>
                        <CampoDigitacao  tipo="text" valor={estado} placeholder="Estado" onChange={setEstado}/>
                    </Container>
                    <ContainerSwitch>
                        <Subtitulo>Atende por plano ?</Subtitulo>
                        <Switch {...label} onChange={() => {
                            possuiPlano ?
                            setPossuiPlano(false) :
                            setPossuiPlano(true)
                        }}/>
                        <TextoSwitch>Não/Sim</TextoSwitch>
                    </ContainerSwitch>
                    {possuiPlano ? 
                    <>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox onChange={handleChange} value={'Sulamerica'}/>} label="Sulamerica"/>
                            <FormControlLabel control={<Checkbox onChange={handleChange} value={'Unimed'}/>} label="Unimed"/>
                            <FormControlLabel control={<Checkbox onChange={handleChange} value={'Bradesco'}/>} label="Bradesco"/>
                            <FormControlLabel control={<Checkbox onChange={handleChange} value={'Amil'}/>} label="Amil"/>
                            <FormControlLabel control={<Checkbox onChange={handleChange} value={'Biosaúde'}/>} label="Biosaúde"/>
                            <FormControlLabel control={<Checkbox onChange={handleChange} value={'Biovida'}/>} label="Biovida"/>
                            <FormControlLabel control={<Checkbox onChange={handleChange} value={'Outro'}/>} label="Outro"/>
                        </FormGroup>
                    </>    
                :
                ''
                }
                <BotaoCustomizado>Cadastrar</BotaoCustomizado>
                </form>
            </BoxCustomizado>
        </Modal>
    )
}