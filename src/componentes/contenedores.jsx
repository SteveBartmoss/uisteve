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