import { Card, CardContent, CardText, CardTitle } from "../componentes/Card";
import { Carrusel } from "../componentes/Carrusel";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function CarruselPage() {

    const items = [
        {
            content:
                <Card>
                    <CardTitle>Pagina 1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Officia aliquam pariatur amet itaque aut voluptate nemo
                        doloremque consectetur, atque est accusamus? Libero ipsum
                        fugiat esse praesentium quod harum aliquam soluta!
                    </CardText>
                </Card>,
        },
        {
            content:
                <Card>
                    <CardTitle>Pagina 2</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Culpa possimus, error vel eaque aut quod expedita voluptas asperiores.
                        Ratione laborum amet hic reiciendis voluptatibus obcaecati
                        fuga dolor maiores placeat numquam.
                    </CardText>
                </Card>,
        },
        {
            content:
                <Card>
                    <CardTitle>Pagina 3</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor officiis asperiores consequatur possimus. Ex sint,
                        corporis eum voluptatibus magni, sapiente odit magnam ullam
                        amet, atque minus optio alias accusamus officiis?
                    </CardText>
                </Card>
        }
    ]

    return (
        <Panel>
            <DivMainContent>

                <h1 className="main-subtitle">Carrusel</h1>

                <p className="main-content">
                    Una forma simple de acomodar los elementos 
                    de una pagina es mediante una lista que parece 
                    nunca terminar, con este carrusel puedes tener 
                    ese efecto
                </p>

                <DivRow>
                    <DivCol>
                        <Card>
                            <CardTitle>Seccion de noticias</CardTitle>
                            <CardContent>
                                <Carrusel elements={items} />
                            </CardContent>
                        </Card>
                    </DivCol>
                </DivRow>
            </DivMainContent>
        </Panel>
    )
}