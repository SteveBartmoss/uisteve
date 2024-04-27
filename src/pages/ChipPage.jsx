import { Card, CardAccions, CardText, CardTitle } from "../componentes/Card";
import { Chip } from "../componentes/Chip";
import { DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function ChipPage() {
    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Chip</h1>

                <p className="main-content">
                    Este elemento le da un toco llamativo a 
                    un texto en tu aplicacion para no tener 
                    que mostrar solo algunas letras
                </p>
                <DivRow>
                    <Card>
                        <CardTitle>Chips</CardTitle>
                        <CardText>
                            A vaces no basta con mostrar el texto 
                            si no que debemos dar un poco mas al usuario
                        </CardText>
                        <CardAccions>
                            <Chip color={"principal"}>Principal</Chip>
                        </CardAccions>
                    </Card>
                    <Card>
                        <CardTitle>Chips</CardTitle>
                        <CardText>
                            A vaces no basta con mostrar el texto 
                            si no que debemos dar un poco mas al usuario
                        </CardText>
                        <CardAccions>
                            <Chip color={"success"}>success</Chip>
                            <Chip color={"info"}>success</Chip>
                            <Chip color={"warning"}>success</Chip>
                            <Chip color={"error"}>success</Chip>
                        </CardAccions>
                    </Card>
                </DivRow>
            </DivMainContent>
        </Panel>
    );
}