import { Card, CardContent, CardText, CardTitle } from "../componentes/Card";
import { Menu } from "../componentes/Menu";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function PageMenu() {

    const elementos = ["Botones", "Tabs", "Modales"];

    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Menu desplegable</h1>

                <p className="main-content">
                    El diseno en diferentes tipos de pantallas 
                    o para dar mas espacio al usario no siempre es facil
                    pero con este menu desplegable puedes tener un acomodo 
                    simple y efectivo
                </p>

                <DivRow>
                    <DivCol>
                        <Card>
                            <CardTitle>Menu simple</CardTitle>
                            <CardText>
                                Usa menos espacio a la hora de acomodar 
                                los elementos de tu aplicacion, logrando 
                                un mejor estilo
                            </CardText>
                            <CardContent>
                                <Menu titulo={"menu"} elementos={elementos}/>
                            </CardContent>
                        </Card>
                    </DivCol>
                </DivRow>
            </DivMainContent>
        </Panel>
    )
}