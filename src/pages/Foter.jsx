import { NavLink } from "react-router-dom";
import { DivCol, DivFooterContent, DivMainContent, DivRow } from "../componentes/contenedores";


export function Foter() {
    return (
        <div className="div-footer">
            <DivMainContent>
                <DivFooterContent>
                    <DivRow>
                        <p className="footer-link">Power by Makeer Studios</p>
                    </DivRow>
                    <DivRow>
                        <NavLink className="footer-link" to="/news">News</NavLink>
                        <NavLink className="footer-link" to="/about">About</NavLink>
                        <NavLink className="footer-link" to="/licence">Licencia</NavLink>
                        <NavLink className="footer-link" to="/documentation">Documentacion</NavLink>
                    </DivRow>
                </DivFooterContent>
            </DivMainContent>
        </div>
    );
}