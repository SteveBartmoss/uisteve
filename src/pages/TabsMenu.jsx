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
                                    content: <p className="tab">Hola marco</p>,
                                },
                                {
                                    id: 2,
                                    title: "Tab2",
                                    content: <p className="tab">Hola kevin</p>,
                                },
                                {
                                    id: 3,
                                    title: "Tab3",
                                    content: <p className="tab">Hola irachoki</p>,
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