import { Route, Routes } from "react-router-dom";
import { DivFull } from "../componentes/contenedores";
import { DocuHome } from "../documentacion/docuHome";
import useScreen from "../helpers/useScreen";
import { MenuMobil } from "../componentes/MenuMobil";
import { MenuVertical } from "../componentes/MenuVertical";
import { BtnDocu } from "../documentacion/btndocu";
import { ColapsableDocu } from "../documentacion/colapsableDocu";
import { TextFieldDocu } from "../documentacion/textFieldDocu";
import { TabsDocu } from "../documentacion/tabsDocu";
import { ModalDocu } from "../documentacion/modalDocu";
import { TooltipDocu } from "../documentacion/tooltipDocu";
import { SnackBarDocu } from "../documentacion/snackBarDocu";


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
        },
        {
            title: 'Tabs',
            route: 'tabs',
            childs: []
        },
        {
            title: 'Modales',
            route: 'modales',
            childs: []
        },
        {
            title: 'Tooltip',
            route: 'tooltip',
            childs: []
        },
        {
            title: 'SnackBar',
            route: 'snackBar',
            child: []
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
                    <Route path="tabs" element={<TabsDocu />} />
                    <Route path="modales" element={<ModalDocu />} />
                    <Route path="tooltip" element={<TooltipDocu />} />
                    <Route path="snackbar" element={<SnackBarDocu />} />
                </Routes>
            </DivFull>
        </>
    )
}