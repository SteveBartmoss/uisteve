import { BrowserRouter,Routes,Route } from "react-router-dom";
import { MenuVertical } from "../componentes/MenuVertical";
import { TextField } from "../componentes/TextField";


export function RuoterUi(){
    return(
        <BrowserRouter>
            <MenuVertical />
            <Routes>
                <Route path="/" element={<h1>Home</h1>}  />
                <Route path="/dash" element={<h1>Dash</h1>}  />
                <Route path="/forms/texfield" element={<TextField />}  />
            </Routes>
        </BrowserRouter>
    );
}