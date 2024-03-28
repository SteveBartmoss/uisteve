import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuVertical } from "../componentes/MenuVertical";
import { TextField } from "../componentes/TextField";
import { BasicCards } from "../pages/BasicCards";
import { Acordeones } from "../pages/ExpansionPanel";
import { Buttons } from "../pages/Buttons";
import { TabsMenu } from "../pages/TabsMenu";
import { Foter } from "../pages/Foter";
import { DivFull } from "../componentes/contenedores";
import { TopBar } from "../componentes/TopBar";


export function RuoterUi() {
    return (
        <BrowserRouter>
            <MenuVertical />
            <DivFull>
                <TopBar />
                <Routes>
                    <Route path="/" element={<BasicCards />} />
                    <Route path="/dash" element={<BasicCards />}/>
                    <Route path="/forms/texfield" element={<TextField />} />
                    <Route path="/cards/basic" element={<BasicCards />} />
                    <Route path="/acordeon" element={<Acordeones />} />
                    <Route path="/components/buttons" element={<Buttons />} />
                    <Route path="/components/tabs" element={<TabsMenu />} />
                </Routes>
                <Foter />
            </DivFull>
        </BrowserRouter>
    );
}