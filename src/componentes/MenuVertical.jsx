import { NavLink } from "react-router-dom";
import { ExtendPanel } from "./ExtendPanel";

export function MenuVertical() {
    return (
        <div className="menu-vertical">
            <div className="nav-bar">
                <NavLink className="menu-item" to="/">Home</NavLink>
                <NavLink className="menu-item" to="/dash">Dashboards</NavLink>
                <ExtendPanel title={'Ui Elements'}>
                    <NavLink className="menu-item" to="/cards/basic">Card Basic</NavLink>
                    <NavLink className="menu-item" to="/acordeon">Expansion Panel</NavLink>
                </ExtendPanel>
                <NavLink className="menu-item" to="/dash">Fomrs & Tables</NavLink>
                <NavLink className="menu-item" to="/forms/texfield">Texfield</NavLink>
                <ExtendPanel title={'Components'}>
                    <NavLink className="menu-item" to="/components/buttons">Buttons</NavLink>
                    <NavLink className="menu-item" to="/components/tabs">Tabs</NavLink>
                    <NavLink className="menu-item" to="/components/popup">PopUp</NavLink>
                </ExtendPanel>
            </div>
        </div>
    );
}