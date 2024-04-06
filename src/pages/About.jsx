import { DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function About() {
    return (
        <Panel>
            <DivRow>
                <DivMainContent>
                    <h1 className="main-subtitle">Acerca de Ui Steve</h1>
                    <p className="main-content">Este proyecto tiene como objetivo presentar una
                        plantilla de elementos ui para que los usuarios puedan usarlos
                        o aprender como crearlos, al igual que si alguien
                        requiere solamente usar una plantilla de front end
                        dispones de recursos para implementar rapidamente.
                    </p>
                    <p className="main-content">
                        Esta plantilla es desarrollada de manera independiente y sin fines de obtener un
                        lucro, esto puede hacer que el desarrollo se vea lento o que no se busque mejorar
                        tan frecuentemente como cualquier otro proyecto que tiene una gran empresa detras.

                        Otro de los objetivos es mejorar mis habilidades a la hora de desarrollar aplicaciones web
                        por lo que esta plantilla no solo pretende ser de ayuda para otras personas, si 
                        no tambien servir de muestra en mi portfolio.
                    </p>
                    <p className="main-content">
                        La mayoria de los componentes estas pensados para ser reutilizados de 
                        una forma sencilla y que tambien puedan ser estudiados son tener muchos 
                        problemas, ademas se estara trabajando para proporcionar la informacion sobre como utilizar 
                        los componentes (props que reciben, si pueden ser contenedores o no, que funcion recibe) 
                        para que se pueda usar sin problemas.
                    </p>
                </DivMainContent>
            </DivRow>
        </Panel>
    );
}