import { Children } from "react"
import './Btn.consistent'


export function Btn({Children,variant,color='principal',evento}){
    return(
        <button onClick={evento} className={`btn-basic ${variant} ${color}`} >{children}</button>
    )
}