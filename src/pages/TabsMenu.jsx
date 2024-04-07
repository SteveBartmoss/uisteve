import { useState } from "react";
import { Boton } from "../componentes/Boton";
import { Card, CardAccions, CardContent, CardText, CardTitle } from "../componentes/Card";
import { Tabs } from "../componentes/Tabs";
import { TextField } from "../componentes/TextField";
import { DivCol, DivMainContent, DivRow, Panel, Ventana, VentanaContent } from "../componentes/contenedores";

export function TabsMenu() {

    const [mensaje, setMensaje] = useState('');

    const onPressBoton = () => {
        setMensaje('boton presionado')
    }

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
                                            <Ventana>
                                                <p className="main-content">Datos personales</p>
                                                <DivRow>
                                                    <DivCol>
                                                        <TextField label={"Nombre"} />
                                                        <TextField label={"Apellidos"} />
                                                    </DivCol>
                                                    <DivCol>
                                                        <TextField label={"Correo"} />
                                                        <TextField label={"Password"} />
                                                    </DivCol>
                                                </DivRow>
                                            </Ventana>,
                                    },
                                    {
                                        id: 2,
                                        title: "Tab2",
                                        content:
                                            <Ventana>
                                                <p className="main-content">Datos de contacto</p>
                                                <DivRow>
                                                    <DivCol>
                                                        <TextField label={"Telefono"} />
                                                        <TextField label={"Celular"} />
                                                    </DivCol>
                                                    <DivCol>
                                                        <TextField label={"Curp"} />
                                                        <TextField label={"Github"} />
                                                    </DivCol>
                                                </DivRow>
                                            </Ventana>,
                                    },
                                    {
                                        id: 3,
                                        title: "Tab3",
                                        content:
                                            <Ventana>
                                                <p className="main-content">Datos de domicilio</p>
                                                <DivRow>
                                                    <DivCol>
                                                        <TextField label={"Calle"} />
                                                        <TextField label={"Fracc"} />
                                                    </DivCol>
                                                    <DivCol>
                                                        <TextField label={"Codigo"} />
                                                        <TextField label={"Estado"} />
                                                    </DivCol>
                                                </DivRow>
                                            </Ventana>,
                                    },
                                ]
                            }

                            />
                        </CardContent>
                        <CardAccions>
                            <Boton evento={onPressBoton} variant='' color={'principal'}>try me</Boton>
                        </CardAccions>
                    </Card>
                </DivRow>

            </DivMainContent>
        </Panel>
    );
}