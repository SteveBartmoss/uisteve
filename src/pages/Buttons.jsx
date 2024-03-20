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
                        <Boton variant='basic'>Seguir</Boton>
                    </CardAccions>
                </Card>
            </DivRow>
        </div>
    );
}