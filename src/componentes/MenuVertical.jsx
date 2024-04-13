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
                    ]
                }
                />
                <MenuList title={'Forms & Tables'} elements={
                    [
                        {
                            title: 'Texfield',
                            route: '/forms/texfield',
                        },
                    ]
                }
                />
                <MenuList title={'Components'} elements={
                    [
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
                        }
                    ]
                } />
            </div>
        </div>
    );
}