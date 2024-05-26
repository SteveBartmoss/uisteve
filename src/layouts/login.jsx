import { Boton } from "../componentes/Boton";
import { Card, CardContent, CardText, CardTitle } from "../componentes/Card";
import { TextField } from "../componentes/TextField";
import { DivRow, Panel } from "../componentes/contenedores";

export function Login(){
    return(
        <Panel>
            <DivRow>
                <img className="img-login" src="/Assets/montain.jpg" />
                <Card>
                    <CardTitle>Bienvenido a UiSteve</CardTitle>
                    <CardText>
                        Inicia Sesion para ver la nueva plantilla
                    </CardText>
                    <CardContent>
                        <TextField />
                        <TextField />
                        <Boton color={'principal'}>Login</Boton>
                    </CardContent>
                    <CardText>
                        Aun no tiene una cuenta, crea una
                    </CardText>
                </Card>
            </DivRow>
        </Panel>
        
    )
}