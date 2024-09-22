import { DivMainContent, DivRow, Panel } from "../componentes/contenedores";


export function News() {
    return (
        <Panel>
            <DivRow>
                <DivMainContent>
                    <h1 className="main-title">Ui Steve 0.17.20 Gemmel (Alfa)</h1>

                    <hr className="divider" />

                    <h1 className="main-subtitle">Change Log</h1>

                    <h1>Nueva documentacion</h1>

                    <h1>Nueva estructura de carpetas</h1>

                    <h1 className="alter-subtitle">Nuevo Select box</h1>

                    <p className="main-content">
                        Los nuevos select box permiten a los usuarios 
                        tener diferentes opciones para elegir en tu 
                        aplicacion
                    </p>

                    <h1 className="alter-subtitle">Nuevo Carrusel</h1>

                    <p className="main-content">
                        Una manera divertida de mostrar 
                        el contenido para tus usuarios, 
                        este carrusel nunca llega al final
                    </p>

                    <h1 className="alter-subtitle">Nueva Tabla</h1>

                    <p className="main-content">
                        Se agrego una tabla para poder 
                        organizar los datos de los usuarios 
                        de una forma eficiente
                    </p>

                    <h1 className="alter-subtitle">Nuevo Menu</h1>

                    <p className="main-content">
                        Este menu depslegable hara que 
                        tus usuarios puedan tener opciones 
                        para elegir en tu aplicacion
                    </p>

                    <h1 className="alter-subtitle">Nuevo SnackBar</h1>

                    <p className="main-content">
                        Puedes dejarle algun mensaje a 
                        tus usuarios sin tener que mostrar 
                        todo un modal que ocupa la pantalla 
                        con el nuevo snackBar
                    </p>

                    <h1 className="alter-subtitle">Nuevo Chips</h1>

                    <p className="main-content">
                        Ya dispones de una forma llamativa 
                        de decorar el texto de alguna palabra 
                        especial o algo que quieras resaltar
                    </p>
                    
                    <h1 className="alter-subtitle">Nuevos TextArea</h1>

                    <p className="main-content">
                        Ahora dispones de un text area que te permite 
                        usar todas las palabras que quieras sin tener que 
                        cortar lo que quieres decir
                    </p>

                    <h1 className="alter-subtitle">Nuevo tool tip</h1>

                    <p className="main-content">
                        Ahora puedes darle una ayuda a tus usuarios para que 
                        no se pierdan a la hora de usar tu aplicacion o si 
                        alguna de las opciones no es precisamente amigable con 
                        los nuevos usuarios
                    </p>

                    <h1 className="alter-subtitle">Nuevo slider</h1>

                    <p className="main-content">
                        Ahora se puede dar al usuario una barra de volumen 
                        o alguna otra aplicacion que le quieras dar a este menu deslizante 
                        para que tus usuarios tengan algo entretenido para usar
                    </p>

                    <h1 className="alter-subtitle">Nuevo Swtich</h1>

                    <p className="main-content">
                        Ahora se puede usar un switch para que tus usuarios cambien 
                        el estado de un input de manera cencilla logrando hacer que 
                        tu aplicacion sea interactiva
                    </p>

                    <h1 className="alter-subtitle">Nuevos loader</h1>

                    <p className="main-content">
                        Ahora dispones de un simple pero efectivo componente
                        que puedes mostrar mientras la informacion de tu
                        aplicacion termina de llegar
                    </p>

                    <h1 className="alter-subtitle">Mejoras en las tabs</h1>

                    <p className="main-content">
                        El componente tabs ahora esta mas complete y permite
                        mostrar los elementos de una mejor forma, se esperan
                        proximas mejoras pero por el momento es una buen comienzo
                    </p>

                    <h1 className="alter-subtitle">Iconos</h1>

                    <p className="main-content">
                        Gracias a las herramientas de google ahora puedes tener
                        llamtivos iconos en la plantilla, por el momento la implementacion
                        es mediante su propio elemento pero se espera poder agregarlos
                        a otros elementos mediante una prop
                    </p>

                </DivMainContent>
            </DivRow>

        </Panel>
    )
}
