import { DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function News() {
    return (
        <Panel>
            <DivRow>
                <DivMainContent>
                    <h1 className="main-title">Ui Steve version 0.14.6 Gemmel</h1>

                    <hr className="divider" />

                    <h1 className="main-subtitle">Change Log</h1>

                    <h1>Nuevo Select box</h1>

                    <h1>Nuevo Carrusel</h1>

                    <h1>Nueva Tabla</h1>

                    <h1>Nuevo Menu</h1>

                    <h1>Nuevo SnackBar</h1>

                    <h1>Nuevo Chips</h1>
                    
                    <h1>Nuevos TextArea</h1>

                    <h1>Nuevo tool tip</h1>

                    <h1 className="alter-subtitle">Nuevo slider</h1>

                    <p className="main-content">
                        Ahora se puede dar al usuario una barra de volumen 
                        o alguna otra aplicacion que le quieras dar a este menu deslizante 
                        para que tus usuarios tengan algo entretenido para usar
                    </p>

                    <h1 className="alter-subtitle">Nuevo Swtich</h1>

                    <p className="main-content">
                        Ahora se puede usar un switch para que tus usuarios cambien 
                        el estado de un input de manera cencilla logrando hacer que 
                        tu aplicacion sea interactiva
                    </p>

                    <h1 className="alter-subtitle">Nuevos loader</h1>

                    <p className="main-content">
                        Ahora dispones de un simple pero efectivo componente
                        que puedes mostrar mientras la informacion de tu
                        aplicacion termina de llegar
                    </p>

                    <h1 className="alter-subtitle">Mejoras en las tabs</h1>

                    <p className="main-content">
                        El componente tabs ahora esta mas complete y permite
                        mostrar los elementos de una mejor forma, se esperan
                        proximas mejoras pero por el momento es una buen comienzo
                    </p>

                    <h1 className="alter-subtitle">Iconos</h1>

                    <p className="main-content">
                        Gracias a las herramientas de google ahora puedes tener
                        llamtivos iconos en la plantilla, por el momento la implementacion
                        es mediante su propio elemento pero se espera poder agregarlos
                        a otros elementos mediante una prop
                    </p>

                </DivMainContent>
            </DivRow>

        </Panel>
    )
}