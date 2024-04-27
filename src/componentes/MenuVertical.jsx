import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";

export function MenuVertical() {
    return (
        <div className="menu-vertical">
            <div className="nav-bar">
                <NavLink className="menu-item" to="/">Home</NavLink>
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
                            title: 'Slider',
                            route: '/components/slider',
                        },
                        {
                            title: 'Tool Tip',
                            route: '/components/tooltip',
                        }
                    ]
                }
                />
                <MenuList title={'Forms & Tables'} elements={
                    [
                        {
                            title: 'Texfield',
                            route: '/forms/texfield',
                        },
                        {
                            title: 'Switch',
                            route: '/forms/switch'
                        }
                    ]
                }
                />
            </div>
        </div>
    );
}