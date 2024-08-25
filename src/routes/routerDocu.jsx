import { Route, Routes } from "react-router-dom";
import { DivFull } from "../componentes/contenedores";
import { DocuHome } from "../documentacion/docuHome";
import useScreen from "../helpers/useScreen";
import { MenuMobil } from "../componentes/MenuMobil";
import { MenuVertical } from "../componentes/MenuVertical";


export function RouterDocu(){

    const {width, height} = useScreen();

    const menuElements = [
        {
            title: 'Home',
            route: '/',
            childs: []
        },
        {
            title: 'btn',
            route: 'btn',
            childs: []
        },
    ]

    return(
        <>
            {width <= 480 ? <MenuMobil menuItems={menuElements} /> : <MenuVertical menuItems={menuElements} />}
            <DivFull>
                <Routes>
                    <Route index element={<DocuHome />} />
                    <Route path="btn" element={<h1>Boton</h1>} />
                </Routes>
            </DivFull>
        </>
    )
}