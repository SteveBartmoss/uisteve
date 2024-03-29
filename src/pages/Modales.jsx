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
            <Modal estado={open} close={closeModal}>
                <Card>
                    <CardTitle>Hola a todos</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ducimus cumque sapiente quaerat dolores excepturi beatae 
                        maxime rerum dolorem sed aperiam. Veniam modi, expedita 
                        repellat optio accusamus placeat sint tenetur cumque.
                    </CardText>
                    <CardAccions>
                        <Boton evento={()=>closeModal()} variant='' color={'success'}>Cerrar</Boton>
                    </CardAccions>
                </Card>
            </Modal>
        </Panel>
    );
} 