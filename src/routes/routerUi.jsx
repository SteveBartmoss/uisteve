import { BrowserRouter,Routes,Route } from "react-router-dom";
import { MenuVertical } from "../componentes/MenuVertical";
import { TextField } from "../componentes/TextField";
import { BasicCards } from "../pages/BasicCards";
import { Acordeones } from "../pages/ExpansionPanel";
import { Buttons } from "../pages/Buttons";


export function RuoterUi(){
    return(
        <BrowserRouter>
            <MenuVertical />
            <Routes>
                <Route path="/" element={<h1>Home</h1>}  />
                <Route path="/dash" element={<h1>Dash</h1>}  />
                <Route path="/forms/texfield" element={<TextField />}  />
                <Route path="/cards/basic" element={<BasicCards />}  />
                <Route path="/acordeon" element={<Acordeones />} />
                <Route path="/components/buttons" element={<Buttons />} />
            </Routes>
        </BrowserRouter>
    );
}