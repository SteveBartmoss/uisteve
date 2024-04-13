import { Lista } from "../componentes/Lista";
import { DivMainContent, Panel } from "../componentes/contenedores";


export function Documentacion() {
    
    const listaSrc = ["componentes", "pages", "routes"];

    return(
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Hola a todos</h1>

                <p className="main-content">Gracias por usar la plantia o pensar en usarla :)</p>

                <hr className="divider" />

                <h1 className="main-subtitle">Primeros pasos</h1>

                <p className="main-content">
                    Aunque el proyecto esta pensado para llegar a ser usado 
                    como si fuera un paquete de npm (como moment.js, nodemon.js 
                    o pdf.js) aun no esta en un estado completo y no me parece 
                    tan util creala, se pueden usar los componentes de la planitlla 
                    clonando el repositorio y modificando la misma para tus necesasidades.
                </p>

                <p className="main-content">
                    Puedes clonar el repositorio en el siguiente enlace
                </p>

                <a className="footer-link" rel="noopener noreferrer" target="_blank"  href="https://github.com/MarcoAntonioGuadalupeRivasGuzman/uisteve">
                    Keep Coding
                </a>

                <p className="main-content">
                    La plantilla por el momento esta desarrollada en react por lo 
                    que esta pensada para ser usada en un proyecto de este mismo 
                    framework, pero puedes replicar los componentes en tu propio 
                    proyecto si asi lo deseas o modificar este mismo proyecto 
                    para empezar a trabajar con tu nueva apliacion
                </p>

                <hr className="divider" />

                <h1 className="main-subtitle">Estructura de las carpetas</h1>

                <p className="main-content">
                    La caperta principal en la que se encuentran los elementos 
                    de la plantilla es src, la estructura de las carpetas dentro 
                    de la misma es la siguiente
                </p>

                <Lista elementos={listaSrc} />

                <p className="main-content">
                    La carpeta componentes contiene los elementos ui como los botones, 
                    los paneles collapsables, las cards o los tabs. 
                </p>

                <p className="main-content">
                    La carpeta pages contiene las paginas que son mostradas al hacer click 
                    en los elementos del menu lateral como la pagina de las cards, de los 
                    paneles colapsables o la pagina home.
                </p>

                <p className="main-content">
                    La carpeta routes contiene el router de la plantilla y es donde se pueden 
                    incorporar nuevas rutas si es que son necesarias.
                </p>

                <hr className="divider" />

                <h1 className="main-subtitle">Archivo de estilos</h1>

                <p className="main-content">
                    La mayoria de los estilos estan declarados en el archivo App.css ya que 
                    este suele venir al crear una nueva aplicacion con react y pueden ser usados 
                    de manera global, se tiene pensado declarar los estilos dentro de los mismo 
                    componentes pero por el momento se estan asignando clases que contiene el 
                    archivo principal de css.
                </p>

                <p className="main-content">
                    El archivo esta sepadado por regiones para facilitar la busqueda de la clase 
                    que tiene cierto componente y si se desea se pueden modificar para mejorar 
                    o personalizar el componente.
                </p>

                <p className="main-content">
                    La integracion de google fonts y de google icons ya esta implementada en la 
                    plantilla por lo que si se desea poder usar el componente icono en otro proyecto
                    asi como usar la fuente popins, es necesario implementar la etiqueta link que te 
                    proporciona google.
                </p>

                <hr className="divider" />

                <h1 className="main-subtitle">Enfoque de la plantilla</h1>

                <p className="main-content">
                    Siguiendo la filosofia de react (todo es reutilizable) se crearon los componente 
                    con la idea de que pudieran ser facilmente usados una y otra vez, por este motivo 
                    se agregan props y se busca manejar el estado de una que sea simple y practica para 
                    los usuarios (o al menos eso es lo que busco logar unu ) por este motivo se tendran 
                    que mandar diferentes propiedades a un componente para poder trabajar con el.
                </p>

                <p className="main-content">
                    La meta es lograr completar la plantilla y posteriormente convertilar en una libreria 
                    funcional que facilite el trabajo de los desarrolladores a la hora enfrentar la 
                    creacion de una aplicacion web.
                </p>

            </DivMainContent>
        </Panel>
    );
}