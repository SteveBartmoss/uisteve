import { useState } from "react";
import "../App.css"

export function ExtendPanel({ children, title }) {

    const [collapse,setCollapse]=useState(false)

    const onChangeCollapse=()=>{
        setCollapse(!collapse)
    }

    return (
        <div className="extend-panel">
            <div className="extend-head" onClick={()=>onChangeCollapse()}>
                <div className="extend-title">{title}</div>
                <img className={collapse ? 'down-icon' : 'up-icon'} src="/Assets/expand.svg" />
            </div>
            <div className={collapse ? 'extend-content' : 'close-content'}>
                {children}
            </div>
        </div>
    );
}