import { useState } from "react";
import { Boton } from "../componentes/Boton";
import { Card, CardAccions, CardText, CardTitle } from "../componentes/Card";
import { DivRow } from "../componentes/contenedores";

export function Buttons() {

    const [evento,setEvento]=useState('');

    const onHandleClick=(tipo)=>{
        setEvento(tipo)
    }

    return (
        <div>
            <DivRow>
                <Card>
                    <CardTitle>Basico</CardTitle>
                    <CardText>
                        Un Boton que tiene un diseno simple pero funcional
                    </CardText>
                    <CardText>
                        Se presiono un boton tipo {evento}
                    </CardText>
                    <CardAccions>
                        <Boton evento={()=>onHandleClick('succes')} variant='' color={'success'}>success</Boton>
                        <Boton evento={()=>onHandleClick('info')} variant='' color={'info'}>info</Boton>
                        <Boton evento={()=>onHandleClick('warning')} variant='' color={'warning'}>warning</Boton>
                        <Boton evento={()=>onHandleClick('error')} variant='' color={'error'}>error</Boton>
                    </CardAccions>
                </Card>
            </DivRow>
        </div>
    );
}