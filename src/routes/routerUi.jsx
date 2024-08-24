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
import { IconsPage } from "../pages/IconsPage";
import { Documentacion } from "../pages/Documentacion";
import { LoaderPage } from "../pages/LoadaerPage";
import { News } from "../pages/news";
import { SliderPage } from "../pages/SliderPage";
import { ToolTipPage } from "../pages/ToolTipPage";
import { Licencia } from "../pages/Licencia";
import { TooglePage } from "../pages/TooglePage";
import { TextLongPage } from "../pages/TextLongPage";
import { ChipPage } from "../pages/ChipPage";
import { SnackBarPage } from "../pages/SnackBarPage";
import { PageMenu } from "../pages/PageMenu";
import useScreen from "../helpers/useScreen";
import { MenuBoton } from "../componentes/MenuBoton";
import { MenuMobil } from "../componentes/MenuMobil";
import { TablePage } from "../pages/TablePage";
import { CarruselPage } from "../pages/CarruselPage";
import { Login } from "../layouts/login";
import { SelectBoxPage } from "../pages/SelectBoxPage";


export function RuoterUi() {

    const { width, height } = useScreen()

    console.log(`width: ${width}, height: ${height}`)

    const menuElements = [
        {
            title: 'Home',
            route: '/',
            childs: []
        },
        {
            title: 'Cards',
            route: '',
            childs: [
                {
                    title: 'Card Basic',
                    route: '/cards/basic',
                },
            ]
        },
        {
            title: 'Components',
            route: '',
            childs: [
                {
                    title: 'Expansion Panel',
                    route: '/acordeon',
                },
                {
                    title: 'Buttons',
                    route: '/components/buttons',
                },
                {
                    title: 'Tabs',
                    route: '/components/tabs',
                },
                {
                    title: 'Modales',
                    route: '/components/modales',
                },
                {
                    title: 'Iconos',
                    route: '/components/icons',
                },
                {
                    title: 'Loader',
                    route: '/components/loader',
                },
                {
                    title: 'Tool Tip',
                    route: '/components/tooltip',
                },
                {
                    title: 'Chip',
                    route: '/components/chip',
                },
                {
                    title: 'SnackBar',
                    route: '/components/snackbar',
                },
                {
                    title: 'Menu',
                    route: '/components/menu',
                },
                {
                    title: 'Carrusel',
                    route: '/components/carrusel',
                }
            ]
        },
        {
            title: 'Forms',
            route: '',
            childs: [
                {
                    title: 'Texfield',
                    route: '/forms/texfield',
                },
                {
                    title: 'Switch',
                    route: '/forms/switch',
                },
                {
                    title: 'Slider',
                    route: '/forms/slider',
                },
                {
                    title: 'Text Long',
                    route: '/forms/textlong',
                },
                {
                    title: 'Select Box',
                    route: '/forms/selectbox',
                }
            ]
        },
        {
            title: 'Tables',
            route: '',
            childs: [
                {
                    title: 'Table',
                    route: '/tables/table',
                },
            ]
        },
        {
            title: 'Pages',
            route: '',
            childs: [
                {
                    title: 'Login',
                    route: '/login',
                },
            ]
        }
    ]

    return (
        <>
            {width <= 480 ? <MenuMobil menuItems={menuElements} /> : <MenuVertical menuItems={menuElements} />}

            <DivFull>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/documentation" element={<Documentacion />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/licence" element={<Licencia />} />
                    <Route path="/dash" element={<BasicCards />} />
                    <Route path="/forms/texfield" element={<InputsPage />} />
                    <Route path="/forms/switch" element={<TooglePage />} />
                    <Route path="/forms/slider" element={<SliderPage />} />
                    <Route path="/forms/textlong" element={<TextLongPage />} />
                    <Route path="/forms/selectbox" element={<SelectBoxPage />} />
                    <Route path="/cards/basic" element={<BasicCards />} />
                    <Route path="/acordeon" element={<Acordeones />} />
                    <Route path="/components/buttons" element={<Buttons />} />
                    <Route path="/components/tabs" element={<TabsMenu />} />
                    <Route path="/components/modales" element={<Modales />} />
                    <Route path="/components/icons" element={<IconsPage />} />
                    <Route path="/components/loader" element={<LoaderPage />} />
                    <Route path="/components/slider" element={<SliderPage />} />
                    <Route path="/components/tooltip" element={<ToolTipPage />} />
                    <Route path="/components/chip" element={<ChipPage />} />
                    <Route path="/components/snackbar" element={<SnackBarPage />} />
                    <Route path="/components/menu" element={<PageMenu />} />
                    <Route path="/components/carrusel" element={<CarruselPage />} />
                    <Route path="/tables/table" element={<TablePage />} />
                    <Route path="/pages/login" element={<Login />} />
                </Routes>
                <Foter />
            </DivFull>
        </>
    );
}