import { NavLink } from "react-router-dom";
import { Card, CardAccions, CardText, CardTitle } from "../componentes/Card";
import { Tabs } from "../componentes/Tabs";
import { DivRow } from "../componentes/contenedores";

export function TabsMenu() {
    return (
        <div>
            <h1>Tabs menu</h1>
            <DivRow>
                <Card>
                    <CardTitle>Tabs simples</CardTitle>
                    <CardText>
                        Unas simples tabs que permiten cambiar elementos
                    </CardText>
                    <CardAccions>
                        <Tabs headers={
                            [
                                {
                                    id: 1,
                                    title: "Tab1",
                                    content: <p className="tab">Hola marco</p>,
                                },
                                {
                                    id: 2,
                                    title: "Tab1",
                                    content: <p className="tab">Hola kevin</p>,
                                },
                                {
                                    id: 3,
                                    title: "Tab1",
                                    content: <p className="tab">Hola irachoki</p>,
                                },
                            ]
                        }

                        />
                    </CardAccions>
                </Card>
            </DivRow>
        </div>
    );
}