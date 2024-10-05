
import { Card, CardAccions, CardContent, CardText, CardTitle } from "../componentes/Card";
import { DataTable } from "../componentes/DataTable";
import { Menu } from "../componentes/Menu";
import { ToolTip } from "../componentes/ToolTip";
import { Btn } from "../componentes/btn/Btn";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";

export function ToolTipPage() {

    
    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Tool Tip</h1>

                <p className="main-content">
                    Las interfaces de usuario no siempre son claras
                    para todos pero con este tooltip puedes mostrar
                    algo de ayuda para los usuarios
                </p>

                <DivRow>
                    <DivCol>
                        <Card>
                            <CardTitle>Ayuda para el usuario</CardTitle>
                            <CardText>
                                Esta tarjeta puede ser confusa para el usuarios
                                pero el tooltip esta aqui para ayudarnos
                            </CardText>

                            <CardAccions>
                                <ToolTip text={"Presiona para seguir leyendo"}>
                                    <Btn color={"principal"}>saber mas</Btn>
                                </ToolTip>
                            </CardAccions>
                        </Card>
                    </DivCol>

                </DivRow>
            </DivMainContent>
        </Panel>
    )
}