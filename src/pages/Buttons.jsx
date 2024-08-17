import { useState } from "react";
//import { Card, CardAccions, CardText, CardTitle } from "../componentes/Card";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";
//import { Btn } from "../componentes/Btn";
import { Card, CardAccions, CardText, CardTitle } from "../componentes/card/Card";
import { Btn } from "../componentes/btn/Btn";

export function Buttons() {

    const [evento, setEvento] = useState('');
    const [prueba, setPrueba] = useState('');

    const onHandleClick = (tipo) => {
        setEvento(tipo)
    }

    const onHadlePrueba = () => {
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
                            <h1>Un simple boton</h1>
                            <p>
                                Un buen elemento para tus aplicaciones {prueba}
                            </p>
                            <CardAccions>
                                <Btn evento={() => onHadlePrueba()} variant='' color={'principal'}>Try me</Btn>
                            </CardAccions>
                        </Card>
                    </DivCol>

                    <DivCol>
                        <Card>
                            <h1>Basico</h1>
                            <p>
                                Un Boton que tiene un diseno simple pero funcional
                            </p>
                            <p>
                                Se presiono un boton tipo {evento}
                            </p>
                            <CardAccions>
                                <Btn evento={() => onHandleClick('succes')} variant='' color={'success'}>success</Btn>
                                <Btn evento={() => onHandleClick('info')} variant='' color={'info'}>info</Btn>
                                <Btn evento={() => onHandleClick('warning')} variant='' color={'warning'}>warning</Btn>
                                <Btn evento={() => onHandleClick('error')} variant='' color={'error'}>error</Btn>
                            </CardAccions>
                        </Card>
                    </DivCol>

                </DivRow>

            </DivMainContent>

        </Panel>
    );
}