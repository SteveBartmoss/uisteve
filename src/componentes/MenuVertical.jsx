import { NavLink } from "react-router-dom";

export function MenuVertical() {
    return (
        <div className="menu-vertical">
            <div className="nav-bar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/dash">Dashboards</NavLink>
                <NavLink to="/dash">Ui Elements</NavLink>
                <NavLink to="/dash">Fomrs & Tables</NavLink>
            </div>
        </div>
    );
}