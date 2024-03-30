import { Boton } from "../componentes/Boton";
import { Card, CardAccions, CardContent, CardLink, CardText, CardTitle } from "../componentes/Card";
import { ExtendPanel } from "../componentes/ExtendPanel";
import { TextField } from "../componentes/TextField";
import { DivCol, DivFull, DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function HomePage() {
    return (
        <Panel>
            <DivRow>
                <DivMainContent>
                    <h1 className="main-title">Ui Steve</h1>
                    <p className="main-content">
                        Una plantilla de elemento ui para poder implementar,
                        mejorar o utilizar como ejemplo.
                    </p>
                    <p className="main-content">
                        Algunos de los elementos aun no resultan sumamente
                        interesantes pero aun esta en desarrollo y esta siendo
                        desarrollada como una practia para mejorar mis habilidades
                        en la creacion de aplicaciones web y mejorar mi portafolio
                        de front end.
                    </p>

                    <h1>Cards</h1>

                    <p className="main-content">
                        Un elemento comun en una aplicacion web y da un toque
                        llamativo y al mismo tiempo permite acomodar la informacion
                        logrando que la pagina no sea simplemente un parrafo.
                    </p>

                    <DivRow>
                        <Card>
                            <CardTitle>Carda basica</CardTitle>
                            <CardText>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Laboriosam, incidunt nesciunt officiis nostrum numquam doloribus,
                                eligendi quam repellat nobis ex, dignissimos in eos quos ipsum quas.
                                Necessitatibus dolor culpa voluptatum?
                            </CardText>
                        </Card>

                        <Card>
                            <CardTitle>Card con link</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eum animi explicabo iste eaque unde iusto praesentium,
                                nihil dolorem vero sit, velit, accusantium in dicta mollitia
                                sint architecto fugit! Velit, nihil!
                            </CardText>
                            <CardAccions>
                                <CardLink url={'https://stevechambitas.netlify.app/home'} text={'Saber mas'} />
                            </CardAccions>
                        </Card>
                    </DivRow>

                    <h1>Paneles colapsables</h1>

                    <p className="main-content">
                        Una forma de organizar la informacion sin tener que
                        usar todo el espacion en pantalla, mejora la experiencia
                        del lecto con estos paneles expandibles.
                    </p>

                    <DivRow>
                        <DivCol>
                            <Card>
                                <CardTitle>Un solo panel expandible</CardTitle>
                                <ExtendPanel title={"Single panel"}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Nesciunt distinctio similique quibusdam dolorem! Blanditiis
                                    dolor cumque vero officiis, ad quisquam illo reiciendis
                                    excepturi porro consequuntur est, repudiandae labore placeat
                                    praesentium.
                                </ExtendPanel>
                            </Card>
                        </DivCol>

                        <DivCol>
                            <Card>
                                <CardTitle>Multiple paneles</CardTitle>

                                <ExtendPanel title={"Panel 1"}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Voluptas, eum autem. Porro optio quis cupiditate sapiente!
                                    Enim voluptates ipsam laboriosam? Eius similique quis asperiores
                                    quos perferendis, reprehenderit unde quasi et!
                                </ExtendPanel>

                                <ExtendPanel title={"Panel 2"}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Reprehenderit culpa recusandae beatae velit aperiam odio magni?
                                    Reprehenderit nam fuga rerum inventore! Facere reprehenderit,
                                    rerum nisi nobis aut quisquam quam modi!
                                </ExtendPanel>

                                <ExtendPanel title={"Panel 3"}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Vero, facere rerum error sunt, hic, aspernatur quidem facilis
                                    unde modi ipsam ad eius pariatur atque. Neque commodi enim eum
                                    cupiditate voluptatibus?
                                </ExtendPanel>

                            </Card>
                        </DivCol>

                    </DivRow>

                    <h1>Text Field</h1>

                    <p className="main-content">
                        Un elemento que no puede faltar una aplicacion
                        son los formulario y estos campos de texto te
                        permitiran darle un mejor estilo a tus aplaciones.
                    </p>

                    <DivRow>

                        <DivCol>
                            <Card>
                                <CardTitle>Un simple campo de texto</CardTitle>
                                <CardContent>
                                    <TextField />
                                </CardContent>
                            </Card>
                        </DivCol>

                        <DivCol>
                            <Card>
                                <CardTitle>Un simple formulario</CardTitle>

                                <CardContent>
                                    <TextField />
                                </CardContent>

                                <CardContent>
                                    <TextField />
                                </CardContent>

                            </Card>
                        </DivCol>

                    </DivRow>

                    <h1>Botones</h1>

                    <p className="main-content">
                        Otro elemento que no puede faltar en el front end
                        son los botones y aqui esta una varidad de simples
                        pero funcionales botones
                    </p>

                    <DivRow>
                        <DivCol>
                            <Card>
                                <CardTitle>Un simple boton</CardTitle>
                                <CardAccions>
                                    <Boton variant='' color={'success'}>success</Boton>
                                </CardAccions>
                            </Card>
                        </DivCol>

                        <DivCol>
                            <Card>
                                <CardTitle>Una variedad de botones</CardTitle>
                                <CardAccions>
                                    <Boton variant='' color={'success'}>success</Boton>
                                    <Boton variant='' color={'info'}>info</Boton>
                                    <Boton variant='' color={'warning'}>warning</Boton>
                                    <Boton variant='' color={'error'}>error</Boton>
                                </CardAccions>
                            </Card>
                        </DivCol>

                    </DivRow>

                    <h1>Modales</h1>

                    <p className="main-content">
                        Una forma de permitir a los usuarios tener
                        multiples opciones sin tener que redireccionarlos
                        de un lado a otro es el uso de modales y este simple
                        pero funcinal modal es la solucion.
                    </p>

                    <DivRow>
                        <DivCol>
                            <Card>
                                <CardTitle>Un modal basico</CardTitle>
                            </Card>
                        </DivCol>

                        <DivCol>
                            <Card>
                                <CardTitle>Un formulario</CardTitle>
                            </Card>
                        </DivCol>
                    </DivRow>

                </DivMainContent>
            </DivRow>
        </Panel>
    )
}