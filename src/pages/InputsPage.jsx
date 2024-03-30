import { Card, CardContent, CardTitle } from "../componentes/Card";
import { TextField } from "../componentes/TextField";
import { DivRow, Panel } from "../componentes/contenedores";


export function InputsPage() {
    return (
        <Panel>
            <h1>Textfield</h1>
            <DivRow>

                <Card>
                    <CardTitle>Un simple textfield</CardTitle>
                    <CardContent>
                        <DivRow>
                            <TextField />
                        </DivRow>
                    </CardContent>
                </Card>
            </DivRow>
        </Panel>
    );
}