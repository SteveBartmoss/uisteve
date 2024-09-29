import { useState } from "react";
import { DivMainContent, DivRow, Panel } from "../componentes/contenedores";
import { Btn } from "../componentes/btn/Btn";
import { Card, CardAccions, CardText, CardTitle } from "../componentes/card/Card";
import { Modal } from "../componentes/modal/Modal";


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
                            <Btn evento={() => openModal()} variant='' color={'success'}>Abrir modal</Btn>
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
                        <Btn evento={() => closeModal()} variant='' color={'error'}>Cerrar</Btn>
                    </CardAccions>
                </Card>
            </Modal>
        </Panel>
    );
} 