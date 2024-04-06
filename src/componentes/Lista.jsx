

export function Lista({elementos}){
    return(
        <div className="div-list">
            {
                elementos.map(item => 
                    <p className="element-list">{item}</p>
                )
            }
        </div>
    );
}