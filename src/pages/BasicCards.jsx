import { Card, CardAccions, CardContent, CardImg, CardImgContent, CardLink, CardText, CardTitle } from "../componentes/Card";
import { DivCol, DivFull, DivRow } from "../componentes/contenedores";

export function BasicCards() {
    return (
        <div className="div-90">
            <h1>Basic Cards</h1>
            <DivRow>
                <DivCol>
                    <Card>
                        <CardTitle>Esta es una card de prueba</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facere pariatur molestiae amet, cupiditate inventore maiores reprehenderit,
                            ex earum neque ab libero eum quo fuga corporis tempora atque, praesentium ullam nisi.
                        </CardText>
                    </Card>
                </DivCol>

                <DivCol>
                    <Card>
                        <CardTitle>Card con link</CardTitle>
                        <CardText>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Inventore commodi numquam nihil ad molestias similique voluptatem
                            blanditiis ex tempora, accusantium atque. Natus aliquam tempora
                            dolor cumque architecto dignissimos nesciunt debitis.
                        </CardText>
                        <CardAccions>
                            <CardLink url={'https://stevechambitas.netlify.app/home'} text={'Saber mas'} />
                        </CardAccions>
                    </Card>
                </DivCol>

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
        </div>
    );
}