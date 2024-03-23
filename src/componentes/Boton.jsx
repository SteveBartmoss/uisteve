

export function Boton({children,variant,color}){
    return(
        <button className={`btn-basic ${variant} ${color}`} >{children}</button>
    );
}