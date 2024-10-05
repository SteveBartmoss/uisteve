import { Card, CardContent, CardText, CardTitle } from "../componentes/Card";
import { TextField } from "../componentes/textField/TextField";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";

export function InputsPage() {
    return (
        <Panel>

            <DivMainContent>

                <h1 className="main-subtitle">Textfield</h1>

                <p className="main-content">
                    Los formularios son algo comun en las aplicaciones web 
                    estos text field le daram buen toque a tu aplicacion 
                    para llamar la atencion de los usuarios.
                </p>

                <DivRow>
                    <DivCol>
                        <Card>
                            <CardTitle>Un simple textfield</CardTitle>
                            <CardText>
                                Una manera de darle un buen estilo a tus formularios
                            </CardText>
                            <CardContent>
                                <TextField label={"Usuario"} />
                            </CardContent>
                        </Card>
                    </DivCol>

                    <DivCol>
                        <Card>
                            <CardTitle>Un formulario simple</CardTitle>
                            <CardText>
                                Registre sus datos
                            </CardText>
                            <CardContent>
                                <TextField label={"Correo"} />
                            </CardContent>
                            <CardContent>
                                <TextField label={"Password"} />
                            </CardContent>
                        </Card>
                    </DivCol>

                </DivRow>
            </DivMainContent>

        </Panel>
    );
}