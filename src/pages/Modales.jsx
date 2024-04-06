import { useState } from "react";
import { Card, CardAccions, CardText, CardTitle } from "../componentes/Card";
import { Modal } from "../componentes/Modal";
import { DivMainContent, DivRow, Panel } from "../componentes/contenedores";
import { Boton } from "../componentes/Boton";


export function Modales() {

    const [open, setOpen] = useState(false)

    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    return (

        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Modales simples</h1>
                <p className="main-content">
                    Una forma de mostrar diferentes elementos en una 
                    pagina sin tener que recurrir al redireccionamiento 
                    de pagina
                </p>
                <DivRow>
                    <Card>
                        <CardTitle>Un modal simple</CardTitle>
                        <CardText>
                            Una manera siple de abrir una pantalla emergente
                            para el usuario
                        </CardText>
                        <CardAccions>
                            <Boton evento={() => openModal()} variant='' color={'success'}>Abrir modal</Boton>
                        </CardAccions>
                    </Card>
                </DivRow>
            </DivMainContent>
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
                        <Boton evento={() => closeModal()} variant='' color={'error'}>Cerrar</Boton>
                    </CardAccions>
                </Card>
            </Modal>
        </Panel>
    );
} 