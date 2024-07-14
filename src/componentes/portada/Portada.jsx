import React from "react";
import { DivCol, DivRow } from "../contenedores";

export function Portada({backgroundImage,perfil}) {
    return (
        <>
        <style>
            {
                `.img-portada{
                    background: url(${backgroundImage}) no-repeat center center/cover;
                }`
            }
        </style>
        <section>
            <DivRow>
                <div>
                    <img />
                </div>
                <DivCol>
                    <h1 >Steve</h1>
                    <p >Estudiante, programador, amante de los videjuegos</p>
                </DivCol>
            </DivRow>
        </section>
        </>
        
    )
}