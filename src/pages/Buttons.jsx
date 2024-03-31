import { useState } from "react";
import { Boton } from "../componentes/Boton";
import { Card, CardAccions, CardText, CardTitle } from "../componentes/Card";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";

export function Buttons() {

    const [evento, setEvento] = useState('');
    const [prueba,setPrueba] = useState('');

    const onHandleClick = (tipo) => {
        setEvento(tipo)
    }

    const onHadlePrueba=()=>{
        setPrueba('Hi stalker')
    }

    return (
        <Panel>
            <DivMainContent>

                <h1 className="main-subtitle">Botones</h1>

                <p className="main-content">
                    Ningun formulario puede esta completo sin los botones
                    y estos simples pero funcionales botones luciran bien en
                    tu aplicacion.
                </p>

                <DivRow>

                    <DivCol>
                        <Card>
                            <CardTitle>Un simple boton</CardTitle>
                            <CardText>
                                Un buen elemento para tus aplicaciones {prueba}
                            </CardText>
                            <CardAccions>
                                <Boton evento={() => onHadlePrueba()} variant='' color={'principal'}>Try me</Boton>
                            </CardAccions>
                        </Card>
                    </DivCol>

                    <DivCol>
                        <Card>
                            <CardTitle>Basico</CardTitle>
                            <CardText>
                                Un Boton que tiene un diseno simple pero funcional
                            </CardText>
                            <CardText>
                                Se presiono un boton tipo {evento}
                            </CardText>
                            <CardAccions>
                                <Boton evento={() => onHandleClick('succes')} variant='' color={'success'}>success</Boton>
                                <Boton evento={() => onHandleClick('info')} variant='' color={'info'}>info</Boton>
                                <Boton evento={() => onHandleClick('warning')} variant='' color={'warning'}>warning</Boton>
                                <Boton evento={() => onHandleClick('error')} variant='' color={'error'}>error</Boton>
                            </CardAccions>
                        </Card>
                    </DivCol>

                </DivRow>

            </DivMainContent>

        </Panel>
    );
}