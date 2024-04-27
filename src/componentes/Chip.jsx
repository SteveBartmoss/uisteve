

export function Chip({children, color}){
    return(
        <div className={`chip-${color}`}>
            <span className="chip">{children}</span>
        </div>
    )
}