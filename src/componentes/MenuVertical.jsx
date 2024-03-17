import { NavLink } from "react-router-dom";

export function MenuVertical() {
    return (
        <div className="menu-vertical">
            <div className="nav-bar">
                <NavLink className="menu-item" to="/">Home</NavLink>
                <NavLink className="menu-item" to="/dash">Dashboards</NavLink>
                <NavLink className="menu-item" to="/dash">Ui Elements</NavLink>
                <NavLink className="menu-item" to="/dash">Fomrs & Tables</NavLink>
                <NavLink className="menu-item" to="/forms/texfield">Texfield</NavLink>
            </div>
        </div>
    );
}