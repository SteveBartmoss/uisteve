import { Card, CardAccions, CardContent, CardText, CardTitle } from "../componentes/Card";
import { Tabs } from "../componentes/Tabs";
import { DivRow, Panel } from "../componentes/contenedores";

export function TabsMenu() {
    return (
        <Panel>
            <h1>Tabs menu</h1>
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
        </Panel>
    );
}