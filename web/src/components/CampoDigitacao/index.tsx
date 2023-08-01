import styled from "styled-components";

const Campo = styled.input`
    background: #F0F0F0;
    margin: 1em 0;
    box-sizing: border-box;
    box-shadow: 2px 2px 2px rgba(0,0,0.15);
    border-radius: 8px;
    border: none;
    width: 100%;
    padding: 16px;
`

const Rotulo = styled.label`
    display: block;
    font-weight: 700;
    font-size 16px;
    line-height: 19px;
    color: var(--azul-escuro);
`

const Container = styled.div`
    width: 100%;
`

interface Props{
    tipo: string,
    valor: string,
    placeholder: string,
    onChange: (value: string) => void,
    label?: string;
}

export default function CampoDigitacao ({tipo, valor, placeholder, onChange, label}: Props) {
    return (
        <Container>
            <Rotulo>{label}</Rotulo>
            <Campo type={tipo} value={valor} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} required/>
        </Container>
    )
}