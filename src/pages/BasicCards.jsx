import { Card, CardAccions, CardLink, CardText, CardTitle } from "../componentes/Card";

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

            <Card>
                <CardTitle>Card con link</CardTitle>
                <CardText>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Inventore commodi numquam nihil ad molestias similique voluptatem 
                    blanditiis ex tempora, accusantium atque. Natus aliquam tempora 
                    dolor cumque architecto dignissimos nesciunt debitis.
                </CardText>
                <CardAccions>
                    <CardLink url={'https://stevechambitas.netlify.app/home'} text={'Saber mas'} />
                </CardAccions>
            </Card>
        </div>
    );
}