import { Card, CardAccions, CardImg, CardImgContent, CardLink, CardText, CardTitle } from "../componentes/card/Card";
import { DivCol, DivMainContent, DivRow, Panel } from "../componentes/contenedores";

export function BasicCards() {
    return (
        <Panel>
            <DivMainContent>

                <h1 className="main-subtitle">Basic Cards</h1>

                <p className="main-content">
                    Un elemento que esta presente en muchas librerias de ui y que
                    aportan un estilo llamativo a una aplicacion web, estas simples
                    cards pueden organizar el contenido de una forma rapida.
                </p>

                <DivRow>

                    <DivCol>
                        <Card>
                            <h1>Esta es una card de prueba</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Facere pariatur molestiae amet, cupiditate inventore maiores reprehenderit,
                                ex earum neque ab libero eum quo fuga corporis tempora atque, praesentium ullam nisi.
                            </p>
                        </Card>
                    </DivCol>

                    <DivCol>
                        <Card>
                            <h1>Card con link</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Inventore commodi numquam nihil ad molestias similique voluptatem
                                blanditiis ex tempora, accusantium atque. Natus aliquam tempora
                                dolor cumque architecto dignissimos nesciunt debitis.
                            </p>
                            <CardAccions>
                                <CardLink url={'https://stevechambitas.netlify.app/home'} text={'Saber mas'} />
                            </CardAccions>
                        </Card>
                    </DivCol>

                </DivRow>

                <DivRow>
                    <DivCol>
                        <CardImg urlImg={"montain.jpg"}>
                            <CardImgContent>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Sunt, obcaecati atque. Placeat officia ducimus fugiat natus harum eos,
                                    a voluptatum cumque est
                                </CardText>
                            </CardImgContent>
                        </CardImg>
                    </DivCol>
                </DivRow>

            </DivMainContent>

        </Panel>

    );
}