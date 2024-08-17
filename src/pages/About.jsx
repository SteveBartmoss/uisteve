import { Lista } from "../componentes/Lista";
import { DivMainContent, DivRow, Panel } from "../componentes/contenedores";


const listaComponentes = ["Botones", "Tabs", "Modales", "TextField", "TextLong", "Panel Colapsable", "Cards", "Loaders", "Switch", "Iconos", "Sliders"];
const listaNuevos = ["Plantillas (login,404,landing, etc)", "Alertas", "Listas", "Menus", "Paginaciones", "Snackbar", "Tooltips", "Elementos de formularios", "Tema oscuro/claro", "Diseno en mobil"]

export function About() {
    return (
        <Panel>
            <DivRow>
                <DivMainContent>
                    <h1 className="main-subtitle">Acerca de Ui Steve</h1>

                    <p className="main-content">
                        Este proyecto tiene como objetivo presentar una plantilla de elementos
                        ui para que los usuarios puedan usarlos o aprender como crearlos, al igual
                        que si alguien requiere solamente usar una plantilla de front end disponer
                        de recursos para implementar rapidamente.
                    </p>

                    <p className="main-content">
                        Esta plantilla es desarrollada de manera independiente y sin fines de obtener un
                        lucro, esto puede hacer que el desarrollo se vea lento o que no se busque mejorar
                        tan frecuentemente como cualquier otro proyecto que tiene una gran empresa detras.
                    </p>

                    <p className="main-content">
                        Otro de los objetivos es mejorar mis habilidades a la hora de desarrollar aplicaciones web
                        por lo que esta plantilla no solo pretende ser de ayuda para otras personas, si
                        no tambien servir de muestra en mi portfolio.
                    </p>

                    <p className="main-content">
                        Se usa la librera de react para crear la plantilla porque es uno de los frameworks
                        que me interesa mejorar por ahora y por el momento solo es compatible
                        con la misma pero podria ser implementada en otros frameworks.
                    </p>

                    <p className="main-content">
                        La mayoria de los componentes estan pensados para ser reutilizados de
                        una forma sencilla y que tambien puedan ser estudiados sin tener muchos
                        problemas, ademas se estara trabajando para proporcionar la informacion sobre como utilizar
                        los componentes (props que reciben, si pueden ser contenedores o no, que eventos recibe)
                        para que se pueda usar sin problemas.
                    </p>

                    <hr className="divider" />

                    <h1 className="main-subtitle">Ui Steve 0.17.21 Gemmel (Alfa) </h1>

                    <p className="main-content">
                        La plantilla cuenta actualmente con los siguientes elementos:
                    </p>

                    <Lista elementos={listaComponentes} />

                    <p className="main-content">
                        Los componentes estan pensados para ser usados al copiar la plantilla
                        de manera que puedan ser importados como si se tratara de una funcion
                        o de algun hook de react, basta con copiar el repositorio de la plantilla.
                    </p>

                    <hr className="divider" />

                    <h1 className="main-subtitle">Road map</h1>

                    <p className="main-content">
                        Algunos de los elementos que me interesan integrar a la plantilla son
                        los siguientes:
                    </p>

                    <Lista elementos={listaNuevos} />

                    <p className="main-content">
                        Estos elementos se agregaran progresivamente con el timepo o
                        al menos es lo que espero, pero se podran ver en las proximas
                        versiones las novedades de la plantilla.
                    </p>

                    <hr className="divider" />

                    <h1 className="main-subtitle">Colabora con el proyecto</h1>

                    <p className="main-content">
                        No solo es un proyecto que se puede usar da manera gratis si no que
                        tambien puede colaborar con el mismo, agregando otros componentes,
                        mejorando estilos, mejorando la estructura de los componentes o
                        si detactas un fallo y logras corregirlo.
                    </p>

                    <p className="main-content">
                        Basta con que clones el repositorio y creer una rama para trabajar en la
                        mejora que pienses agregar
                    </p>

                    <p className="main-content">
                        Puedes encontrar el repositorio en el siguien enlace
                    </p>

                    <a className="footer-link" rel="noopener noreferrer" target="_blank" href="https://github.com/MarcoAntonioGuadalupeRivasGuzman/uisteve">
                        Keep Coding
                    </a>

                </DivMainContent>
            </DivRow>
        </Panel>
    );
}