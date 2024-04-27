import { Card, CardContent, CardText, CardTitle } from "../componentes/Card";
import { TextLongField } from "../componentes/TextLongField";
import { DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function TextLongPage() {
    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Text Long Field</h1>

                <p className="main-content">
                    El arte de expresarse mediante texto
                    puede ser complicado pero con este 
                    campo de texto puedes escribir la cantidad 
                    de palabras suficientes
                </p>
                <DivRow>
                    <Card>
                        <CardTitle>Text Long Field</CardTitle>
                        <CardText>
                            Una alternativa a los text field cuando 
                            necesitas mas cantidad de texto
                        </CardText>
                        <CardContent>
                            <TextLongField />
                        </CardContent>
                    </Card>
                </DivRow>
            </DivMainContent>
        </Panel>
    )
}