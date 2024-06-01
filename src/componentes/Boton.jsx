import './componentes.css';

export function Boton({children,variant,color,evento}){

    return(
        <button onClick={evento} className={`btn-basic ${variant} ${color}`} >{children}</button>
    );
}