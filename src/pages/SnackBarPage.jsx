import { useState } from "react";
import { Card, CardAccions, CardText, CardTitle } from "../componentes/Card";
import { SnackBar } from "../componentes/SnackBar";
import { DivMainContent, DivRow, Panel } from "../componentes/contenedores";
import { Boton } from "../componentes/Boton";


export function SnackBarPage() {

    const [abrir,setAbrir]=useState(false)

    const handleShow=()=>{
        setAbrir(true)
        console.log('click')
        console.log(abrir)
    }

    return (
        <Panel>
            <DivMainContent>
                <h1 className="main-subtitle">Snackbar</h1>

                <p className="main-content">
                    Un modal en toda la pantalla puede 
                    se un poco abusivo para algunos usuarios
                    este snackbar es una buena alternativa
                </p>
                <DivRow>
                    <Card>
                        <CardTitle>Snackbar</CardTitle>
                        <CardText>
                            No sabes lo que es, porque no presionas 
                            el siguiente boton
                        </CardText>
                        <CardAccions>
                            <Boton evento={handleShow} color={"principal"}>Try me</Boton>
                        </CardAccions>
                    </Card>
                </DivRow>
            </DivMainContent>
            <SnackBar open={abrir} setOpen={setAbrir}>
                <Card>
                    <CardTitle>Hola stalker!!</CardTitle>
                </Card>
            </SnackBar>
        </Panel>
    )
}