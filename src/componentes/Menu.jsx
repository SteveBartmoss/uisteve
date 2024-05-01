import { useState } from "react"


export function Menu({elementos,titulo}){

    const [abrir, setAbrir]=useState(false)
    
    const handleOpen=()=>{
        setAbrir(true)
    }

    const handleClose=()=>{
        setAbrir(false)
    }

    return(
        <div className="display-menu">
            <div onMouseEnter={handleOpen} onMouseLeave={handleClose} >{titulo}</div>
            <div className={abrir ? 'display-menu-list' : 'display-menu-none'}>
                {
                    elementos.map(item =>
                        <div>{item}</div>
                    )
                }
            </div>
        </div>
    )
}