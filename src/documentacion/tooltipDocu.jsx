import { DivMainContent, Panel } from "../componentes/contenedores";
import { Lista } from "../componentes/Lista";


export function TooltipDocu() {

    const propsTooltip = ["label", "isPass", "text", "action"];

    return (
        <>
            <Panel>
                <DivMainContent>
                    <h1 className="main-subtitle">TextField</h1>

                    <h1 className="key-word">Props</h1>

                    <p className="main-content">
                        El componente tiene las siguientes props:
                    </p>

                    <Lista elementos={propsTooltip} />

                    <h1 className="key-word">label</h1>

                    <p className="main-content">
                        Este es el texto que aparece en el textfield y que se eleva
                        al escribir en el text field
                    </p>

                    <h1 className="key-word">isPass</h1>

                    <p className="main-content">
                        Esta prop indica si el texto se debe ocultar como
                        por ejemplo cuando es un password
                    </p>

                    <h1 className="key-word">text</h1>

                    <p className="main-content">
                        Es el valor en el que se almacena el texto del textField se
                        asigna al value el textField
                    </p>

                    <h1 className="key-word">action</h1>

                    <p className="main-content">
                        Esta funcion se pasa como parametro para que se ejecute en el
                        evento onChange, por lo genera deberia recibir el target del el evento y manejarlo
                        para asignar el valor a la variable text
                    </p>
                </DivMainContent>
            </Panel>
        </>
    )
}