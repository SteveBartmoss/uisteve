import { Card, CardAccions, CardContent, CardText, CardTitle } from "../componentes/Card";
import { Toogle } from "../componentes/Toogle";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";

export function TooglePage() {
    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Switch</h1>
                <p className="main-content">
                    Un elemeto simple que puede apagar y prenderse
                    todas las veces que quieras sin tener que procuparte
                    por que se rompa
                </p>

                <DivRow>
                    <DivCol>
                        <Card>
                            <CardTitle>Switch</CardTitle>
                            <CardText>
                                Un simple interruptor para mostrar
                                a tus usuarios
                            </CardText>
                            <CardAccions>
                                <Toogle />
                            </CardAccions>
                        </Card>
                    </DivCol>
                </DivRow>

            </DivMainContent>
        </Panel>

    )
}