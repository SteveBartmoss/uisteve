import { useEffect, useState } from "react";

 

 export function Modal({children,estado}){

    
    if(estado){
        return(
            <div className="overlay">
                <h1>Un simple modal</h1>
                <div className="modal-content">
                    <h1>Este sera el modal para mostrar informacion</h1>
                </div>
            </div>
        )
    }
    else{
        return(
            <>
            </>
        )
    }

 }