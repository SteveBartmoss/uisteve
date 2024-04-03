import { DivMainContent, DivRow } from "../componentes/contenedores";


export function About(){
    return(
        <Panel>
            <DivRow>
                <DivMainContent>
                    <h1>Acerda de Ui Steve</h1>
                    <p>Este proyecto tiene como objetivo presentar una 
                        plantilla de elementos ui para que los usuarios puedan usarlos 
                        o aprender como crearlos, al igual que si alguien 
                        requiere solamente usar una plantilla de front end 
                        dispones de recursos
                    </p>
                </DivMainContent>
            </DivRow>
        </Panel>
    );
}