import { NavLink } from "react-router-dom";


export function MenuList({ title, elements }) {
    return (
        <div className="menu-list">
            <div className="menu-list-head">
                <div className="menu-list-title">{title}</div>
            </div>
            <div>
                {
                    elements.map(item =>
                        <NavLink className="menu-item" to={item.route} >{item.title}</NavLink>
                    )
                }
            </div>
        </div>
    )
}