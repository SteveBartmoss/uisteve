

export function Menu({elementos,titulo}){
    return(
        <div className="display-menu">
            <div>{titulo}</div>
            <div>
                {elementos}
            </div>
        </div>
    )
}