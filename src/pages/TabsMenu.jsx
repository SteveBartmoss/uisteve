import { Card, CardContent, CardText, CardTitle } from "../componentes/Card";
import { Tabs } from "../componentes/Tabs";
import { DivMainContent, DivRow, Panel } from "../componentes/contenedores";

export function TabsMenu() {
    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Tabs menu</h1>
                <p className="main-content">
                    Una Buena forma de evitar una redireccion es guardando 
                    todo en una tab para que usuario pued navegart en ellas,
                    aun esta en progreso no me peguen TT_TT
                </p>

                <DivRow>
                    <Card>
                        <CardTitle>Tabs simples</CardTitle>
                        <CardText>
                            Unas simples tabs que permiten cambiar elementos
                        </CardText>
                        <CardContent>
                            <Tabs headers={
                                [
                                    {
                                        id: 1,
                                        title: "Tab1",
                                        content:
                                            <Panel>
                                                <h1>La primera tab</h1>
                                                <p>Este es el contenido de la primera tab</p>
                                            </Panel>,
                                    },
                                    {
                                        id: 2,
                                        title: "Tab2",
                                        content:
                                            <Panel>
                                                <h1>La segunda tab</h1>
                                                <p>Este es el contenido de la segunda tab</p>
                                            </Panel>,
                                    },
                                    {
                                        id: 3,
                                        title: "Tab3",
                                        content:
                                            <Panel>
                                                <h1>La tercera tab</h1>
                                                <p>Este es el contenido de la tercera tab</p>
                                            </Panel>,
                                    },
                                ]
                            }

                            />
                        </CardContent>
                    </Card>
                </DivRow>

            </DivMainContent>
        </Panel>
    );
}