import { useState } from "react";
import { Card, CardAccions, CardText, CardTitle } from "../componentes/Card";
import { Modal } from "../componentes/Modal";
import { DivRow, Panel } from "../componentes/contenedores";
import { Boton } from "../componentes/Boton";


export function Modales(){

    const [open,setOpen]=useState(false)

    const openModal=()=>{
        setOpen(true)
    }

    const closeModal=()=>{
        setOpen(false)
    }

    return(

        <Panel>
            <h1>Modales simples</h1>
            <DivRow>
                <Card>
                    <CardTitle>Un modal simlpe</CardTitle>
                    <CardText>
                        Una manera siple de abrir una pantalla emergente 
                        para el usuario
                    </CardText>
                    <CardAccions>
                        <Boton evento={()=>openModal()} variant='' color={'success'}>Abrir modal</Boton>
                    </CardAccions>
                </Card>
            </DivRow>
            <Modal estado={open} close={closeModal}/>
        </Panel>
    );
} 