
export function Card({children}){
    return(
        <div className="card-basic">{children}</div>
    );
}

export function CardTitle({children}){
    return(
        <div className="card-title">
            {children}
        </div>
    );
}