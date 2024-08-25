import { DivMainContent, Panel } from "../componentes/contenedores";


export function DocuHome() {
    return (
        <>
            <Panel>
                <DivMainContent>
                    <h1 className="main-subtitle">Hola a todos</h1>

                    <p className="main-content">Gracias por usar la plantia o pensar en usarla :)</p>

                    <hr className="divider" />

                    <h1 className="main-subtitle">Primeros pasos</h1>

                    <p className="main-content">
                        Aunque el proyecto esta pensado para llegar a ser usado
                        como si fuera un paquete de npm (como moment.js, nodemon.js
                        o pdf.js) aun no esta en un estado completo y no me parece
                        tan util creala, se pueden usar los componentes de la plantilla
                        clonando el repositorio y modificando la misma para tus necesasidades.
                    </p>

                    <p className="main-content">
                        Puedes clonar el repositorio en el siguiente enlace
                    </p>

                    <a className="footer-link" rel="noopener noreferrer" target="_blank" href="https://github.com/MarcoAntonioGuadalupeRivasGuzman/uisteve">
                        Keep Coding
                    </a>
                </DivMainContent>
            </Panel>
        </>
    )
}