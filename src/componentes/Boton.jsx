

export function Boton({children,variant,color,evento}){

    const clickHandler=()=>{
        evento()
    }

    return(
        <button onClick={clickHandler} className={`btn-basic ${variant} ${color}`} >{children}</button>
    );
}