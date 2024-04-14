import { useState } from "react";
import { NavLink } from "react-router-dom";


export function MenuList({ title, elements }) {

    const [collapse, setCollapse] = useState(false)

    const onChangeCollapse = () => {
        setCollapse(!collapse)
    }

    return (
        <div className="menu-list">
            <div className="menu-list-head">
                <div className="menu-list-title">{title}</div>
                <img className={collapse ? 'down-icon' : 'up-icon'} alt="arrow" src="/Assets/expand.svg" onClick={() => onChangeCollapse()} />
            </div>
            <div className={collapse ? 'menu-list-open' : 'menu-list-close'} >
                {
                    elements.map(item =>
                        <NavLink key={item.route} className={({isActive})=> `menu-item ${isActive ? 'item-active':''}`} to={item.route} >{item.title}</NavLink>
                    )
                }
            </div>
        </div>
    )
}