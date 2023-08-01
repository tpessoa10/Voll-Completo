import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PaginaBase from "./pages/PaginaBase";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaBaseFormulario from "./pages/PaginaBaseFormulario";
import Login from "./pages/Login";

function appRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<PaginaInicial/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Route>
                <Route  path="/" element={<PaginaBaseFormulario/>}>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default appRoutes;