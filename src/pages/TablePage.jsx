import { Card, CardContent, CardText, CardTitle } from "../componentes/Card";
import { DataTable } from "../componentes/DataTable";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function TablePage() {

    const encabezados=[
        {
            title: 'Nombre',
            key: 'name'
        },
        {
            title: 'Apodo',
            key: 'alias'
        },
        {
            title: 'Telefono',
            key: 'telefono'
        }
    ]

    const elementos=[
        {
            name: 'Marco',
            alias: 'Steve',
            telefono: '3311892077'
        },
        {
            name: 'Antonio',
            alias: 'Tony',
            telefono: '3311892077'
        },
        {
            name: 'Pedro',
            alias: 'Peter',
            telefono: '3311892077'
        }
    ]

    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Table Simple</h1>

                <p className="main-content">
                    Los datos pueden ser dificiles de 
                    mostrar ya que a veces pueden estar 
                    bastante desordanados, esta tabla permite 
                    ordenarlos de una manera facil
                </p>

                <DivRow>
                    <DivCol>
                        <Card>
                            <CardTitle>Tabla simple</CardTitle>
                            <CardText>
                                Una tabla para dar orden a tus datos 
                                y que los usuarios sepan  que es lo que 
                                estan viendo
                            </CardText>
                            <CardContent>
                                <DataTable headers={encabezados} elements={elementos} /> 
                            </CardContent>
                        </Card>
                    </DivCol>
                </DivRow>
            </DivMainContent>
        </Panel>
    )
}