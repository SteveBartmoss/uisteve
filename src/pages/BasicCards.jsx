import { Card, CardText, CardTitle } from "../componentes/Card";

export function BasicCards(){
    return(
        <div>
            <h1>Basic Cards</h1>
            <Card>
                <CardTitle>Esta es una card de prueba</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Facere pariatur molestiae amet, cupiditate inventore maiores reprehenderit, 
                    ex earum neque ab libero eum quo fuga corporis tempora atque, praesentium ullam nisi.
                </CardText>
            </Card>
        </div>
    );
}