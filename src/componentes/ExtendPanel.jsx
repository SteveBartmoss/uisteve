import { useState } from "react";
import "../App.css"

export function ExtendPanel({ children, title }) {

    const [collapse,setCollapse]=useState(false)

    const onChangeCollapse=()=>{
        setCollapse(!collapse)
    }

    return (
        <div className="extend-panel">
            <div className="extend-head">
                <div className="extend-title">{title}</div>
                <img src="/Assets/expand.svg" onClick={()=>onChangeCollapse()} />
            </div>
            <div className={collapse ? 'extend-content' : 'close-content'}>
                {children}
            </div>
        </div>
    );
}