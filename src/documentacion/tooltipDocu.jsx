import { DivMainContent, Panel } from "../componentes/contenedores";
import { Lista } from "../componentes/Lista";


export function TooltipDocu() {

    const propsTooltip = ["children","text"];

    return (
        <>
            <Panel>
                <DivMainContent>
                    <h1 className="main-subtitle">Tooltip</h1>

                    <h1 className="key-word">Props</h1>

                    <p className="main-content">
                        El componente tiene las siguientes props:
                    </p>

                    <Lista elementos={propsTooltip} />

                    <h1 className="key-word">child</h1>

                    <p className="main-content">
                        El componente puede actuar como una etiqueta que envuelve 
                        a otros componentes, por esta razon puede recibir el componente child 
                        que sera el componente que activa el tooltip
                    </p>

                    <h1 className="key-word">text</h1>

                    <p className="main-content">
                        Es el valor en el que se muestra cuando el tooltip 
                        se activa, la forma en que se activa es cuando se pone 
                        el cursor sobre el elemento que tiene la etiqueta tooltip
                    </p>

                </DivMainContent>
            </Panel>
        </>
    )
}