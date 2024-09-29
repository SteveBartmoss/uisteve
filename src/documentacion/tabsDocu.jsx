import { DivMainContent, Panel } from "../componentes/contenedores";
import { Lista } from "../componentes/Lista";


export function TabsDocu() {

    const propsBtn = ["headers", "position"];

    return (
        <>
            <Panel>
                <DivMainContent>
                    <h1 className="main-subtitle">Tabs</h1>

                    <h1 className="key-word">Props</h1>

                    <p className="main-content">
                        El componente esta creado con las siguientes props:
                    </p>

                    <Lista elementos={propsBtn} />

                    <h1 className="key-word">headers</h1>

                    <p className="main-content">
                        La propiedad headers es un arreglo con los campos de id, title y content. 
                        id es la clave que se asiga a la funcion map, title es el texto que aparece 
                        por la parte superior de la tabs y content es lo que se tiene que mostrar 
                        cuando la tab esta seleccionada, se puede pasar un componente propio de react 
                        lo cual permite encapsular mas componentes en un solo padre
                    </p>

                    <h1 className="key-word">position</h1>

                    <p className="main-content">
                        La propiedad headers es la forma en que se acomodan las tabs, por ahora son 
                        center, left y rigth que hace que las tabs tomen el centro o los laterales
                    </p>
                </DivMainContent>
            </Panel>
        </>
    )
}