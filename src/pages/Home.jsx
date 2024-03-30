import { DivRow, Panel } from "../componentes/contenedores";


export function HomePage() {
    return (
        <Panel>
            <DivRow>
                <h1 className="main-title">Ui Steve</h1>
                <p className="main-content">
                    Una plantilla de elemento ui para poder implementar,
                    mejorar o utilizar como ejemplo.
                </p>
            </DivRow>
        </Panel>
    )
}