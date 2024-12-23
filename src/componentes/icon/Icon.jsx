

export function Icon({icono,color,size}){
    return(
        <span style={{font: size}} className={`material-icons ${color}`} >{icono}</span>
    )
}