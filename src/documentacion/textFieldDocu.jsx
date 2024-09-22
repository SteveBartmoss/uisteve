import { DivMainContent, Panel } from "../componentes/contenedores";
import { Lista } from "../componentes/Lista";


export function TextFieldDocu(){

    const propsTextField = ["label", "isPass", "text", "action"];

    return(
        <>
            <Panel>
                <DivMainContent>
                    <h1 className="main-subtitle">Componentes</h1>

                    <h1 className="key-word">TextField</h1>

                    <p className="main-content">
                        El componente tiene las siguientes props:
                    </p>

                    <Lista elementos={propsTextField} />

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
                        El componente tiene las siguientes props:
                    </p>

                    <h1 className="key-word">action</h1>

                    <p className="main-content">
                        El componente tiene las siguientes props:
                    </p>

                </DivMainContent>
            </Panel>
        </>
    )
}