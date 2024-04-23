import { Card, CardAccions, CardText, CardTitle } from "../componentes/Card";
import { RangeSlider } from "../componentes/RangeSlider";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function SliderPage() {

    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Slider</h1>

                <p className="main-content">
                    Los usuarios pueden aburrirse a la hora de
                    usar los controles de tu aplicacion pero con
                    este slider encontraran algo llamativo
                </p>

                <DivRow>

                    <DivCol>
                        <Card>
                            <CardTitle>Un simple slider</CardTitle>
                            <CardText>
                                Un elemento llamativo paras tu aplicacion
                            </CardText>
                            <CardAccions>
                                <RangeSlider />
                            </CardAccions>
                        </Card>
                    </DivCol>

                </DivRow>
            </DivMainContent>
        </Panel>
    )

}