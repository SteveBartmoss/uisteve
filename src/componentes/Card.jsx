
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

export function CardText({children}){
    return (
        <div className="card-text">
            {children}
        </div>
    );
}

export function CardLink({url,text}){
    return(
        <a className="card-link" href={url}>{text}</a>
    );
}

export function CardAccions({children}){
    return(
        <div className="card-actions">
            {children}
        </div>
    );
}