import { Card, CardAccions, CardText, CardTitle } from "../componentes/Card";
import { Icon } from "../componentes/Icon";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function IconsPage() {
    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Iconos</h1>

                <p className="main-content">
                    Gracias a google icons ahora se pueden usar sus
                    iconos en la plantilla con lo que basta con que busques
                    en la pagina de google icons el nombre de los iconos
                    que quieres usar
                </p>

                <DivRow>

                    <DivCol>
                        <Card>
                            <CardTitle>Iconos en negro</CardTitle>
                            <CardText>
                                Una buena opcion para usar en tu tema blanco o
                                de colores claros
                            </CardText>
                            <CardAccions>
                                <Icon icono="account_circle" />
                                <Icon icono="settings" />
                                <Icon icono="schedule" />
                                <Icon icono="favorite_border" />
                                <Icon icono="thumb_up" />
                            </CardAccions>
                        </Card>
                    </DivCol>

                    <DivCol>
                        <Card>
                            <CardTitle>Iconos en blanco</CardTitle>
                            <CardText>
                                Una buena opcion para usar en tu tema oscuro
                                o de colores ocuros
                            </CardText>
                            <CardAccions>
                                <Icon icono="lock" color="md-light" />
                                <Icon icono="delete" color="md-light" />
                                <Icon icono="check_circle" color="md-light" />
                                <Icon icono="dashboard" color="md-light" />
                                <Icon icono="article" color="md-light" />
                            </CardAccions>
                        </Card>
                    </DivCol>

                </DivRow>

            </DivMainContent>
        </Panel>
    )
}