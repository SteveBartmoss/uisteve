import { DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function News() {
    return (
        <Panel>
            <DivRow>
                <DivMainContent>
                    <h1 className="main-title">Ui Steve version 0.9.2 Gemmel</h1>

                    <hr className="divider" />

                    <h1 className="main-subtitle">Change Log</h1>

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