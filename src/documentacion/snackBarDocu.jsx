import { DivMainContent, Panel } from "../componentes/contenedores";
import { Lista } from "../componentes/Lista";


export function SnackBarDocu(){

    const propsModal = ["children", "open", "setOpen"];

    return(
        <>
            <Panel>
                <DivMainContent>
                    <h1 className="main-subtitle">Modal</h1>

                    <h1 className="key-word">Props</h1>

                    <p className="main-content">
                        El componente esta creado con las siguientes props:
                    </p>

                    <Lista elementos={propsModal} />

                    <h1 className="key-word">children</h1>

                    <p className="main-content">
                        La propiedad children permite que el componente sea usaso con una etiqueta
                        de apertura y de cierre siendo el contenido de la etiqueta lo que se muestra 
                        dentro del modal.
                    </p>

                    <h1 className="key-word">estado</h1>

                    <p className="main-content">
                        Esto define cuando se abre el modal ya que cuando sea true el modal 
                        se muestra y al cambiar se oculta, se pasa como prop parea que desde 
                        afuera se habra el modal
                    </p>

                    <h1 className="key-word">close</h1>

                    <p className="main-content">
                        Esta funcion se usa para cerrar, se envia como prop para que se pueda manejar 
                        algun evento al momento de cerrar el modoal, la funcion se ejecuta al hacer 
                        click fuera del modal
                    </p>

                    <h1 className="key-word">persistent</h1>

                    <p className="main-content">
                        Esta propiedad permite que el modal persista al hacer click fuera 
                        del mismo o que por el contrario se cierre al pulsar fuera del modal, 
                        se espera que sea un booleano
                    </p>

                </DivMainContent>
            </Panel>
        </>
    )
}