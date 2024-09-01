import { DivMainContent, Panel } from "../componentes/contenedores";
import { Lista } from "../componentes/Lista";

export function ColapsableDocu() {

  const propsBtn = ["children", "title"];

  return (
    <>
      <Panel>
        <DivMainContent>

          <h1 className="main-subtitle">Expansion Panel</h1>

          <h1 className="key-word">Props</h1>

          <p className="main-content">
            El componente esta creado con las siguientes props:
          </p>

          <Lista elementos={propsBtn} />

          <h1 className="key-word">children</h1>

          <p className="main-content">
            La propiedad children permite que el componente sea usaso con una etiqueta
            de apertura y de cierre de esta forma el contenido de la etiqueta sera lo 
            que se oculte al colapsar el panel
          </p>

          <h1 className="key-word">Title</h1>

          <p className="main-content">
            Define el texto que aparece en la parte superior del panel colapsable
          </p>

        </DivMainContent>
      </Panel>

    </>

  )
}
