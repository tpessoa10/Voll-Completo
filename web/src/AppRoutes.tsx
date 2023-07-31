import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PaginaBase from "./pages/PaginaBase";
import PaginaInicial from "./pages/PaginaInicial";

function appRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="/PaginaInicial" element={<PaginaInicial/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default appRoutes;