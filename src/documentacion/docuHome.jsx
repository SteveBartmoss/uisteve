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

                    <p className="main-content">
                        La plantilla por el momento esta desarrollada en react por lo
                        que esta pensada para ser usada en un proyecto de este mismo
                        framework, pero puedes replicar los componentes en tu propio
                        proyecto si asi lo deseas o modificar este mismo proyecto
                        para empezar a trabajar con tu nueva apliacion
                    </p>

                    <h1 className="main-subtitle">Usar solo los componentes</h1>

                    <p className="main-content">
                        Si no quieres o no es necesario usar toda la platilla puedes usar
                        solo los componentes ya que ahora la estructura del proyecto se cambio
                        para facilitar el uso de componentes de manera independiente, ahora cada
                        uno de los componentes estan en su propia carpeta junto con sus propios estilos
                        asi que basta con copiar la carpeta del componente en tu proyecto y podras
                        usarlo sin problemas.
                    </p>

                    
                </DivMainContent>
            </Panel>
        </>
    )
}