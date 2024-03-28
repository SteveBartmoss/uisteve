import { useEffect, useState } from "react";
import { Boton } from "./Boton";



export function Modal({ children, estado, close }) {

    return (
        <div onClick={close} className={estado ? 'overlay' : 'modal-close'}>
            <div className="modal-content">
                <h1>Este sera el modal para mostrar informacion</h1>
                <Boton evento={() => close()} variant='' color={'success'}>Cerrar</Boton>
            </div>
        </div>

    )

}