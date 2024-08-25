import { DivMainContent, Panel } from "../componentes/contenedores";


export function DocuHome() {
    return (
        <>
            <Panel>
                <DivMainContent>
                    <h1 className="main-subtitle">Hola a todos</h1>

                    <p className="main-content">Gracias por usar la plantia o pensar en usarla :)</p>

                    <hr className="divider" />
                </DivMainContent>
            </Panel>
            <h1>Documentacion</h1>
        </>
    )
}