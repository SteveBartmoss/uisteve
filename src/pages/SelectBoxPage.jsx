import { Card, CardContent, CardText, CardTitle } from "../componentes/Card";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";
import { SelectBox } from "../componentes/SelectBox";


export function SelectBoxPage() {

    const nombres=[
        {
            value: 'Steve',
            title: 'Steve'
        },
        {
            value: 'Enrique',
            title: 'Enrique'
        },
        {
            value: 'Kevin',
            title: 'Kevin'
        }
    ]

    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Select Box</h1>
                
                <p className="main-content">
                    No siempre se puede dejar claro 
                    cuales son las opciones de una aplicacion 
                    pero con este selectbox se pueden dar 
                    opciones para los usuarios 
                </p>

                <DivRow>
                    <DivCol>
                        <Card>
                            <CardTitle>Select Box</CardTitle>
                            <CardText>
                                Una forma simple para poder mostrar 
                                opciones para los usuarios
                            </CardText>
                            <CardContent>
                                <SelectBox label={'Selecciona un nombre'} items={nombres} placeMessage={'selecione un nombre'} />
                            </CardContent>
                        </Card>
                    </DivCol>
                </DivRow>

            </DivMainContent>
        </Panel>
    )
}