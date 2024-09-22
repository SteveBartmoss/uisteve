import { Route, Routes } from "react-router-dom";
import { DivFull } from "../componentes/contenedores";
import { DocuHome } from "../documentacion/docuHome";
import useScreen from "../helpers/useScreen";
import { MenuMobil } from "../componentes/MenuMobil";
import { MenuVertical } from "../componentes/MenuVertical";
import { BtnDocu } from "../documentacion/btndocu";
import { ColapsableDocu } from "../documentacion/colapsableDocu";
import { TextFieldDocu } from "../documentacion/textFieldDocu";


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
        {
            title: 'Expansion panel',
            route: 'expand',
            childs: []
        },
        {
            title: 'Text Field',
            route: 'textField',
            childs: []
        }
    ]

    return(
        <>
            {width <= 480 ? <MenuMobil menuItems={menuElements} /> : <MenuVertical menuItems={menuElements} />}
            <DivFull>
                <Routes>
                    <Route index element={<DocuHome />} />
                    <Route path="btn" element={<BtnDocu />} />
                    <Route path="expand" element={<ColapsableDocu />} />
                    <Route path="textField" element={<TextFieldDocu />} />
                </Routes>
            </DivFull>
        </>
    )
}