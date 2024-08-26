

export function ColapsableDocu(){
  return(
    h1 className="main-subtitle">Componentes</h1>

                    <h1 className="key-word">Boton</h1>

                    <p className="main-content">
                        El componente esta creado con las siguientes props:
                    </p>

                    <Lista elementos={propsBtn} />

                    <h1 className="key-word">children</h1>

                    <p className="main-content">
                        La propiedad children permite que el componente sea usaso con una etiqueta
                        de apertura y de cierre siendo el contenido de la etiqueta lo que se muestra
                        en el boton.
                    </p>

                    <h1 className="key-word">Color</h1>

                    <p className="main-content">
                        Color define que color usara el boton siendo 5 colores posibles (primary, success,
                        info, warning, error) esto son los colores posibles que se le pueden asignar.
                    </p>

                    <h1 className="key-word">Evento</h1>

                    <p className="main-content">
                        Evento es la funcion que se ejecutara al momento de hacer click en el boton
                        puediendo manejar de esta manera todo tipo de acciones.
                    </p>
  )
}
