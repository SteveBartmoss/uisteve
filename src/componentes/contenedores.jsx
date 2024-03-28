import "../App.css"

export function MainFrame({children}){
    return(
        <div className="main-frame">
            {children}
        </div>
    );
}

export function DivRow({children}){
    return(
        <div className="div-row">
            {children}
        </div>
    );
}

export function DivCol({children}){
    return(
        <div className="div-col">
            {children}
        </div>
    );
}

export function DivFull({children}){
    return(
        <div className="div-full">
            {children}
        </div>
    );
}

export function Panel({children}){
    return(
        <div className="div-90">
            {children}
        </div>
    )
}