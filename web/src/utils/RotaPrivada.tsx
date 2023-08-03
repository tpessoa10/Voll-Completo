import { Navigate, Outlet } from "react-router"
import autenticaStore from "../stores/autentica.stores"

const RotaPrivada = () => {
    const {estaAutenticado} = autenticaStore

    return (
        estaAutenticado ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default RotaPrivada;