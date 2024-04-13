import { Card, CardContent, CardText, CardTitle } from "../componentes/Card";
import { Loader } from "../componentes/Loader";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function LoaderPage() {
    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Loader</h1>

                <p className="main-content">
                    No siempre la velocidad es el aliado de
                    los usuarios pero pueden ver esta simple
                    animacion cuando carga su contenido
                </p>
                
                <DivRow>
                    <DivCol>
                        <Card>
                            <CardTitle>Loader</CardTitle>
                            <CardText>
                                Puedes estar seguro que este loader 
                                nunca terminara
                            </CardText>
                            <CardContent>
                                <Loader />
                            </CardContent>
                        </Card>
                    </DivCol>
                </DivRow>
            </DivMainContent>
        </Panel>
    )
}