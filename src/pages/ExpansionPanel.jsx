import { Card, CardText, CardTitle } from "../componentes/Card";
import { ExtendPanel } from "../componentes/ExtendPanel";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function Acordeones() {
    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Expansion Panel</h1>

                <p className="main-content">
                    La informacion de una pagina puede ser bastante y
                    en ocacines es dificil poder dejar una interfaz limpia
                    por eso es buena idea usar un panel colapsable para poder
                    organizar mejor el contenido de la tu aplicacion.
                </p>

                <DivRow>

                    <DivCol>
                        <Card>
                            <CardTitle>Un panel simple</CardTitle>
                            <CardText>
                                Un panel de expansion que puede colapsarse para ocultar su contenido
                            </CardText>
                            <ExtendPanel title={"Panel Extendible 1"}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Dolore sunt minima numquam ut quae eveniet aliquid, nisi a similique,
                                suscipit nemo quos amet nam quo quam possimus deserunt provident quibusdam?
                            </ExtendPanel>
                        </Card>
                    </DivCol>

                    <DivCol>
                        <Card>
                            <CardTitle>Un panel simple</CardTitle>
                            <CardText>
                                Un panel de expansion que puede colapsarse para ocultar su contenido
                            </CardText>
                            <ExtendPanel title={"Panel Extendible 1"}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Dolore sunt minima numquam ut quae eveniet aliquid, nisi a similique,
                                suscipit nemo quos amet nam quo quam possimus deserunt provident quibusdam?
                            </ExtendPanel>
                            <ExtendPanel title={"Panel Extendible 2"}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Dolore sunt minima numquam ut quae eveniet aliquid, nisi a similique,
                                suscipit nemo quos amet nam quo quam possimus deserunt provident quibusdam?
                            </ExtendPanel>

                            <ExtendPanel title={"Panel Extendible 3"}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nulla sed voluptate illo beatae enim totam itaque officiis autem! Libero 
                                tempora accusantium nostrum, perferendis nulla sunt consequatur voluptates! 
                                Debitis, at dolores?
                            </ExtendPanel>
                        </Card>
                    </DivCol>

                </DivRow>

            </DivMainContent>

        </Panel>
    );
}