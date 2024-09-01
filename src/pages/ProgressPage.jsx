import { Card } from "../componentes/Card";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";
import { ProgresBar } from "../componentes/progresbar/ProgresBar";


export function ProgressPage() {

    const exampleElements = [
        {
            value: 50,
            label: "Resolver p=np",
        },
        {
            value: 70,
            label: "Steve gpt5",
        },
        {
            value: 80,
            label: "Steve Os",
        },
        {
            value: 10,
            label: "Dominar al mundo"
        }
    ]

    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Progress Bar</h1>

                <p className="main-content">
                    Una buena forma de mostrar a los usuario
                    estadisticas o avances en tareas determinadas
                    para que sepan si estan progresando
                </p>

                <DivRow>
                    <DivCol>
                        <Card>
                            <h1>Tareas de Steve</h1>

                            {
                                exampleElements.map(item=>
                                    <ProgresBar key={item.label} title={item.label} percent={item.value} />
                                )
                            }
                        </Card>
                    </DivCol>
                </DivRow>
            </DivMainContent>
        </Panel>
    )
}