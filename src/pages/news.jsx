import { Panel } from "../componentes/contenedores";


export function News(){
    return(
        <Panel>
            <h1>Ui Steve version 0.5.0 Gemmel</h1>
            <h1>Novedades</h1>
            <h1>Nuevos loader</h1>
            <p>
                Ahora dispones de un simple pero efectivo componente 
                que puedes mostrar mientras la informacion de tu 
                aplicacion termina de llegar
            </p>
            <h1>Mejoras en las tabs</h1>
            <p>
                El componente tabs ahora esta mas complete y permite 
                mostrar los elementos de una mejor forma, se esperan 
                proximas mejoras pero por el momento es una buen comienzo
            </p>
            <h1>Iconos</h1>
            <p>
                Gracias a las herramientas de google ahora puedes tener 
                llamtivos iconos en la plantilla, por el momento la implementacion 
                es mediante su propio elemento pero se espera poder agregarlos 
                a otros elementos mediante una prop
            </p>
        </Panel>
    )
}