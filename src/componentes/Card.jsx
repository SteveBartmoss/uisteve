import { NavLink } from 'react-router-dom';
import './componentes.css';

export function Card({ children,variant="card-basic"}) {
    return (
        <div className={variant}>{children}</div>
    );
}

export function CardTitle({ children }) {
    return (
        <div className="card-title">
            {children}
        </div>
    );
}

export function CardText({ children }) {
    return (
        <div className="card-text">
            {children}
        </div>
    );
}

export function CardLink({ url, text, isBlank=false }) {
    return isBlank ? (
        <a className="card-link" rel="noopener noreferrer" target="_blank" href={url}>{text}</a> 
    ) : (
        <NavLink className="card-link" to={url}>{text}</NavLink>
    )
}

export function CardAccions({ children }) {
    return (
        <div className="card-actions">
            {children}
        </div>
    );
}

export function CardImg({ children, urlImg }) {
    return (
        <div className="card" style={
            {
                backgroundSize: 'cover',
                backgroundImage: `url(/Assets/${urlImg})`,
            }
        }>
            {children}
        </div>

    );
}

export function CardImgContent({ children }) {
    return (
        <div className="card-img-content">
            {children}
        </div>
    );
}

export function CardContent({children}){
    return(
        <div className="card-content">
            {children}
        </div>
    );
}