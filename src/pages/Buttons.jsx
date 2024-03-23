import { Boton } from "../componentes/Boton";
import { Card, CardAccions, CardText, CardTitle } from "../componentes/Card";
import { DivRow } from "../componentes/contenedores";

export function Buttons() {
    return (
        <div>
            <DivRow>
                <Card>
                    <CardTitle>Basico</CardTitle>
                    <CardText>
                        Un Boton que tiene un diseno simple pero funcional
                    </CardText>
                    <CardAccions>
                        <Boton variant='' color={'success'}>success</Boton>
                        <Boton variant='' color={'info'}>info</Boton>
                        <Boton variant='' color={'warning'}>warning</Boton>
                        <Boton variant='' color={'error'}>error</Boton>
                    </CardAccions>
                </Card>
            </DivRow>
        </div>
    );
}