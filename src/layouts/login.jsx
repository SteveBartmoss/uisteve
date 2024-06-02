import { Boton } from "../componentes/Boton";
import { Card, CardContent, CardText, CardTitle } from "../componentes/Card";
import { TextField } from "../componentes/TextField";
import { DivCanva, DivCode, DivCol, DivRow, Panel } from "../componentes/contenedores";

export function Login() {
    return (
        <Panel>
            <DivRow>
                <img className="img-login" src="/Assets/montain.jpg" />
                <DivCanva>
                    <DivCol>
                        <h1 className="alter-subtitle">Bienvenido a UiSteve</h1>\
                        <p className="main-content">Inicia Sesion para ver la nueva plantilla</p>
                        <TextField label={"Usuario"} />
                        <TextField label={"Password"} isPass={true} />
                        <Boton color={'principal'}>Login</Boton>
                        <p className="main-content">Aun no tiene una cuenta, crea una</p>
                    </DivCol>
                </DivCanva>
            </DivRow>
        </Panel>

    )
}