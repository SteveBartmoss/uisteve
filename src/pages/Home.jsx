import { useState } from "react";
import { Boton } from "../componentes/Boton";
import { Card, CardAccions, CardContent, CardLink, CardText, CardTitle } from "../componentes/Card";
import { ExtendPanel } from "../componentes/ExtendPanel";
import { TextField } from "../componentes/TextField";
import { DivCol, DivMainContent, DivRow, Panel, Ventana } from "../componentes/contenedores";
import { Modal } from "../componentes/Modal";
import { Tabs } from "../componentes/Tabs";
import { Loader, LoaderBar } from "../componentes/Loader";
import { Icon } from "../componentes/Icon";
import useScreen from "../helpers/useScreen";
import { ToolTip } from "../componentes/ToolTip";
import { Chip } from "../componentes/Chip";


export function HomePage() {

    const [evento, setEvento] = useState('')
    const [hola, setHola] = useState('')
    const [open, setOpen] = useState(false)
    const [openForm, setOpenForm] = useState(false)

    const onHandleClick = (tipo) => {
        setEvento(tipo)
    }

    const onHandleHello = () => {
        setHola('Hi Stalker')
    }

    const onHandleTryme = () => {
        console.log('Hi Stalker')
    }

    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    const onOpenForm = () => {
        setOpenForm(true)
    }

    const onCloseForm = () => {
        setOpenForm(false)
    }

    const { width, height } = useScreen();

    console.log(`width: ${width}, height: ${height}`)

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

                    <hr className="divider" />

                    <h1 className="main-subtitle">Cards</h1>

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

                    <hr className="divider" />

                    <h1 className="main-subtitle">Paneles expandibles</h1>

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

                    <hr className="divider" />

                    <h1 className="main-subtitle">Text Field</h1>

                    <p className="main-content">
                        Un elemento que no puede faltar una aplicacion
                        son los formulario y estos campos de texto te
                        permitiran darle un mejor estilo a tus aplaciones.
                    </p>

                    <DivRow>

                        <DivCol>
                            <Card>
                                <CardTitle>Un simple campo de texto</CardTitle>

                                <CardText>
                                    Un input con estilo mas llamativo
                                </CardText>

                                <CardContent>
                                    <TextField label={"correo"} />
                                </CardContent>
                            </Card>
                        </DivCol>

                        <DivCol>
                            <Card>
                                <CardTitle>Un simple formulario</CardTitle>

                                <CardText>
                                    Una forma de crear formularios llamativos
                                </CardText>

                                <CardContent>
                                    <TextField label={"usuario"} />
                                </CardContent>

                                <CardContent>
                                    <TextField label={"password"} />
                                </CardContent>

                            </Card>
                        </DivCol>

                    </DivRow>

                    <hr className="divider" />

                    <h1 className="main-subtitle">Botones</h1>

                    <p className="main-content">
                        Otro elemento que no puede faltar en el front end
                        son los botones y aqui esta una varidad de simples
                        pero funcionales botones
                    </p>

                    <DivRow>
                        <DivCol>
                            <Card>
                                <CardTitle>Un simple boton</CardTitle>
                                <CardText>
                                    Este es un simple evento de click {hola}
                                </CardText>
                                <CardAccions>
                                    <Boton evento={onHandleHello} variant='' color={'principal'}>try me</Boton>
                                </CardAccions>
                            </Card>
                        </DivCol>

                        <DivCol>
                            <Card>
                                <CardTitle>Una variedad de botones</CardTitle>
                                <CardText>
                                    Se presion boton de tipo {evento}
                                </CardText>
                                <CardAccions>
                                    <Boton evento={() => onHandleClick('success')} variant='' color={'success'}>success</Boton>
                                    <Boton evento={() => onHandleClick('info')} variant='' color={'info'}>info</Boton>
                                    <Boton evento={() => onHandleClick('warning')} variant='' color={'warning'}>warning</Boton>
                                    <Boton evento={() => onHandleClick('error')} variant='' color={'error'}>error</Boton>
                                </CardAccions>
                            </Card>
                        </DivCol>

                    </DivRow>

                    <hr className="divider" />

                    <h1 className="main-subtitle">Modales</h1>

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
                                <CardText>
                                    Un forma de ahorrar en redirecciones
                                </CardText>
                                <CardAccions>
                                    <Boton evento={openModal} variant={''} color={'principal'}>Abrir</Boton>
                                </CardAccions>
                            </Card>
                        </DivCol>

                        <DivCol>
                            <Card>
                                <CardTitle>Un formulario</CardTitle>
                                <CardText>
                                    Mejora tus formulario con este modal
                                </CardText>
                                <CardAccions>
                                    <Boton evento={onOpenForm} variant={''} color={'principal'}>Abrir</Boton>
                                </CardAccions>
                            </Card>
                        </DivCol>
                    </DivRow>

                    <hr className="divider" />

                    <h1 className="main-subtitle">Tabs</h1>

                    <p className="main-content">
                        Una forma de acomodar los formularios para que el
                        usuario pueda navegar entre diferentes ventanas sin que
                        se tenga que mover continuamente hacia otros formualarios
                        o tener que dar pasos continuos
                    </p>

                    <DivRow>
                        <Card>
                            <CardTitle>Crea una cuenta</CardTitle>
                            <CardText>
                                Ingresa tus datos para registrarte
                            </CardText>
                            <CardContent>
                                <Tabs
                                    headers={
                                        [
                                            {
                                                id: 1,
                                                title: "Datos personales",
                                                content:
                                                    <Ventana>
                                                        <p className="main-content">Datos personales</p>
                                                        <DivRow>
                                                            <DivCol>
                                                                <TextField label={"Nombre"} />
                                                                <TextField label={"Apellidos"} />
                                                            </DivCol>
                                                            <DivCol>
                                                                <TextField label={"Correo"} />
                                                                <TextField label={"Password"} />
                                                            </DivCol>
                                                        </DivRow>
                                                    </Ventana>,
                                            },
                                            {
                                                id: 2,
                                                title: "Contacto",
                                                content:
                                                    <Ventana>
                                                        <p className="main-content">Datos de contacto</p>
                                                        <DivRow>
                                                            <DivCol>
                                                                <TextField label={"Telefono"} />
                                                                <TextField label={"Celular"} />
                                                            </DivCol>
                                                            <DivCol>
                                                                <TextField label={"Curp"} />
                                                                <TextField label={"Github"} />
                                                            </DivCol>
                                                        </DivRow>
                                                    </Ventana>,
                                            },
                                            {
                                                id: 3,
                                                title: "Direccion",
                                                content:
                                                    <Ventana>
                                                        <p className="main-content">Datos de domicilio</p>
                                                        <DivRow>
                                                            <DivCol>
                                                                <TextField label={"Calle"} />
                                                                <TextField label={"Fracc"} />
                                                            </DivCol>
                                                            <DivCol>
                                                                <TextField label={"Codigo"} />
                                                                <TextField label={"Estado"} />
                                                            </DivCol>
                                                        </DivRow>
                                                    </Ventana>,
                                            },
                                        ]
                                    }
                                />
                            </CardContent>
                        </Card>
                    </DivRow>

                    <hr className="divider" />

                    <h1 className="main-subtitle">Loader</h1>

                    <p className="main-content">
                        No siempre tenemos la suerte de tener gran velocidad
                        en nuestros datos que provienen del  backend pero podemos
                        mostrar este loader para que el usuario sepa que debe
                        esperar la respuesta
                    </p>

                    <DivRow>
                        <DivCol>
                            <Card>
                                <CardTitle>Infinite Loader</CardTitle>
                                <CardText>
                                    No importa cuanto tiempo necesites puedes
                                    estar seguro de que este loader no se detendra
                                    mientras cargas los datos de la api
                                </CardText>
                                <CardContent>
                                    <Loader />
                                </CardContent>
                            </Card>
                        </DivCol>

                        <DivCol>
                            <Card>
                                <CardTitle>Infinite Loader</CardTitle>
                                <CardText>
                                    No importa cuanto tiempo necesites puedes
                                    estar seguro de que este loader no se detendra
                                    mientras cargas los datos de la api
                                </CardText>
                                <CardContent>
                                    <LoaderBar />
                                </CardContent>
                            </Card>
                        </DivCol>

                    </DivRow>

                    <hr className="divider" />

                    <h1 className="main-subtitle">Google Icons</h1>

                    <p className="main-content">
                        Gracias a google icons ahora podemos tener acceso
                        a iconos en la plantilla para darle un estilo mas
                        atractivo a nuesta aplacion
                    </p>

                    <DivRow>
                        <DivCol>
                            <Card>
                                <CardTitle>Iconos oscuros</CardTitle>
                                <CardText>
                                    Si el tema de la aplicacion son colores
                                    claros, estos iconos oscuros seran
                                    bastantes utiles
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
                                <CardTitle>Iconos claros</CardTitle>
                                <CardText>
                                    Si el tema de la aplicacion son colores
                                    oscuros, estos iconos claros seran bastantes
                                    utiles
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

                    <hr className="divider" />

                    <h1 className="main-subtitle">Tool Tips</h1>

                    <p className="main-content">
                        Ahora puedes mostrar algo de ayuda para los
                        usuarios con estos tooltip que seran de utilidad
                        a la hora de mostrar ayudar para los usuarios.
                    </p>

                    <DivRow>
                        <DivCol>
                            <Card>
                                <CardTitle>Tool tip</CardTitle>
                                <CardText>
                                    Los usuarios pueden perderse en ocaciones
                                    o simplemente pueden no saber que hace algun
                                    elemento de la aplicacion, este tool tip les
                                    ayudara a saber que hacer
                                </CardText>
                                <CardAccions>
                                    <ToolTip text={"presiona para continuar"}>
                                        <Boton evento={onHandleTryme} color={"principal"}>Try me</Boton>
                                    </ToolTip>
                                </CardAccions>
                            </Card>
                        </DivCol>
                    </DivRow>

                    <hr className="divider" />

                    <h1 className="main-subtitle">Chips</h1>

                    <p className="main-content">
                        Ahora puedes mostrar algo de ayuda para los
                        usuarios con estos tooltip que seran de utilidad
                        a la hora de mostrar ayudar para los usuarios.
                    </p>

                    <DivRow>
                        <DivCol>
                            <Card>
                                <CardTitle>Color principal</CardTitle>
                                <CardText>
                                    Las aplicaciones llamativas atraer a
                                    muchos usuarios asi que estos estilos
                                    haran que tus usuarios disfruten de estos
                                    textos
                                </CardText>
                                <CardAccions>
                                    <Chip color={"principal"}>Principal</Chip>
                                </CardAccions>
                            </Card>
                        </DivCol>

                        <DivCol>
                            <Card>
                                <CardTitle>Diferentes colores</CardTitle>
                                <CardText>
                                    Los colores principales estan disponibles para
                                    que tus textos se van mejor que nunca
                                </CardText>
                                <CardAccions>
                                    <Chip color={"success"}>success</Chip>
                                    <Chip color={"info"}>info</Chip>
                                    <Chip color={"warning"}>warning</Chip>
                                    <Chip color={"error"}>error</Chip>
                                </CardAccions>
                            </Card>
                        </DivCol>
                    </DivRow>

                    <Modal estado={open} close={closeModal}>
                        <Card>
                            <CardTitle>Ejemplo de modal</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nisi fugit quaerat mollitia et error, recusandae, eligendi
                                esse harum veritatis commodi nemo optio nobis corporis ad distinctio
                                eaque aliquid impedit voluptates!
                            </CardText>
                            <CardAccions>
                                <Boton evento={closeModal} variant={''} color={'error'}>Cerrar</Boton>
                            </CardAccions>
                        </Card>
                    </Modal>

                    <Modal estado={openForm} close={onCloseForm}>
                        <Card>
                            <CardTitle>Ejemplo de formulario</CardTitle>
                            <CardText>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Labore ea nostrum dolore vel unde veritatis aperiam! Voluptates,
                                sunt earum. Voluptatum voluptates cumque soluta dicta eius aliquid
                                ullam rerum asperiores accusamus.
                            </CardText>
                            <CardAccions>
                                <Boton evento={onCloseForm} variant={''} color={'error'}>Cerrar</Boton>
                            </CardAccions>
                        </Card>
                    </Modal>

                </DivMainContent>
            </DivRow>
        </Panel>
    )
}