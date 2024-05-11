import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import { useState } from "react";
import { Icon } from "./Icon";
import { MenuBoton } from "./MenuBoton";

export function MenuVertical() {

    const [abrir, setAbrir] = useState(true)

    const closeMenu = () => {
        setAbrir(!abrir)
    }

    return (
        <div className={abrir ? 'menu-vertical' : 'menu-vertical-close'}>
            <MenuBoton evento={closeMenu} isOpen={abrir} />
            <div className={abrir ? 'nav-bar' : 'nav-bar-close'}>

                <NavLink className="menu-item" to='/'>Home</NavLink>
                <MenuList title={'Cards'} elements={
                    [
                        {
                            title: 'Card Basic',
                            route: '/cards/basic',
                        },
                    ]
                }
                />
                <MenuList title={'Components'} elements={
                    [
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
                }
                />
                <MenuList title={'Forms'} elements={
                    [
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
                        }
                    ]
                }
                />
                <MenuList title={'Tables'} elements={
                    [
                        {
                            title: 'Table',
                            route: '/tables/table',
                        },
                    ]
                }
                />
            </div>
        </div>
    );
}