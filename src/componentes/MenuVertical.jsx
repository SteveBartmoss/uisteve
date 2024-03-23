import { NavLink } from "react-router-dom";
import { ExtendPanel } from "./ExtendPanel";
import { MenuList } from "./MenuList";

export function MenuVertical() {
    return (
        <div className="menu-vertical">
            <div className="nav-bar">
                <NavLink className="menu-item" to="/">Home</NavLink>
                <NavLink className="menu-item" to="/dash">Dashboards</NavLink>
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
                <ExtendPanel title={'Ui Elements'}>
                    <NavLink className="menu-item" to="/cards/basic">Card Basic</NavLink>
                    <NavLink className="menu-item" to="/acordeon">Expansion Panel</NavLink>
                </ExtendPanel>
                <MenuList title={'Forms & Tables'} elements={
                    [
                        {
                            title: 'Texfield',
                            route: '/forms/texfield',
                        },
                    ]
                }
                />
                <NavLink className="menu-item" to="/dash">Fomrs & Tables</NavLink>
                <NavLink className="menu-item" to="/forms/texfield">Texfield</NavLink>
                <ExtendPanel title={'Components'}>
                    <NavLink className="menu-item" to="/components/buttons">Buttons</NavLink>
                    <NavLink className="menu-item" to="/components/tabs">Tabs</NavLink>
                    <NavLink className="menu-item" to="/components/popup">PopUp</NavLink>
                </ExtendPanel>
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
                            title: 'PopUp',
                            route: '/components/popup',
                        }
                    ]
                } />
            </div>
        </div>
    );
}