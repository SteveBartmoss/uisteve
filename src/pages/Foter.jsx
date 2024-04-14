import { NavLink } from "react-router-dom";
import { DivCol, DivFooterContent, DivMainContent, DivRow } from "../componentes/contenedores";


export function Foter() {
    return (
        <div className="div-footer">
            <DivMainContent>
                <DivFooterContent>
                    <DivRow>
                        <p className="footer-link">Power by DevFarming</p>
                    </DivRow>
                    <DivRow>
                        <NavLink className="footer-link" to="/about">About</NavLink>
                        <p className="footer-link">Licencia</p>
                        <NavLink className="footer-link" to="/documentation">Documentacion</NavLink>
                    </DivRow>
                </DivFooterContent>
            </DivMainContent>
        </div>
    );
}