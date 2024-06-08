import { useState } from "react";
import { DivCol, DivRow } from "./contenedores";
import { Boton } from "./Boton";
import './componentes.css';


export function Carrusel({ elements }) {

    const [item, setItem] = useState(0);

    const siguiente = () => {
        if (item >= elements.length - 1) {
            setItem(0)
            return
        }
        setItem(item + 1)
    }

    const anterior = () => {
        if (item <= 0) {
            setItem(elements.length - 1)
            return
        }
        setItem(item - 1)
    }

    return (
        <DivCol>
            <DivRow>
                {
                    elements[item].content
                }
            </DivRow>
            <DivRow>
                <div className="carrusel-buttons">
                    <Boton color={'principal'} evento={anterior}>Anterior</Boton>

                    <DivRow>
                        {
                            elements.map((element,index)=>{
                                return <div className={index === item ? 'dot-selected':'dot-carrusel'}></div>
                            })
                        }
                    </DivRow>

                    <Boton color={'principal'} evento={siguiente}>Siguiente</Boton>
                </div>
            </DivRow>
        </DivCol>
    )
}