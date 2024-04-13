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
                        <a className="footer-link" href="/about">About</a>
                        <p className="footer-link">Licencia</p>
                        <a className="footer-link" href="/documentation">Documentacion</a>
                    </DivRow>
                </DivFooterContent>
            </DivMainContent>
        </div>
    );
}