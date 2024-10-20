
import { Card, CardContent, CardText, CardTitle } from "../componentes/Card";
import { Btn } from "../componentes/btn/Btn";
import { DivCanva, DivCode, DivCol, DivRow, Panel } from "../componentes/contenedores";
import { TextField } from "../componentes/textField/TextField";

export function Login() {
    return (
        <DivRow>
            <img className="img-login" src="/Assets/montain.jpg" />
            <DivCanva>
                <DivCol>
                    <h1 className="alter-subtitle">Bienvenido a UiSteve</h1>
                    <p className="main-content">Inicia Sesion para ver la nueva plantilla</p>
                    <TextField label={"Usuario"} />
                    <TextField label={"Password"} isPass={true} />
                    <Btn color={'principal'}>Login</Btn>
                    <p className="main-content">Aun no tiene una cuenta, crea una</p>
                </DivCol>
            </DivCanva>
        </DivRow>
    )
}