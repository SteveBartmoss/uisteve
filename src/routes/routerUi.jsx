import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuVertical } from "../componentes/MenuVertical";
import { BasicCards } from "../pages/BasicCards";
import { Acordeones } from "../pages/ExpansionPanel";
import { Buttons } from "../pages/Buttons";
import { TabsMenu } from "../pages/TabsMenu";
import { Foter } from "../pages/Foter";
import { DivFull } from "../componentes/contenedores";
import { TopBar } from "../componentes/TopBar";
import { Modales } from "../pages/Modales";
import { InputsPage } from "../pages/InputsPage";
import { HomePage } from "../pages/Home";
import { About } from "../pages/About";


export function RuoterUi() {
    return (
        <BrowserRouter>
            <MenuVertical />
            <DivFull>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/dash" element={<BasicCards />}/>
                    <Route path="/forms/texfield" element={<InputsPage />} />
                    <Route path="/cards/basic" element={<BasicCards />} />
                    <Route path="/acordeon" element={<Acordeones />} />
                    <Route path="/components/buttons" element={<Buttons />} />
                    <Route path="/components/tabs" element={<TabsMenu />} />
                    <Route path="/components/modales" element={<Modales />} />
                </Routes>
                <Foter />
            </DivFull>
        </BrowserRouter>
    );
}