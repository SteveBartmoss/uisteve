import { Card, CardText, CardTitle } from "../componentes/Card";
import { ExtendPanel } from "../componentes/ExtendPanel";


export function Acordeones() {
    return (
        <div>
            <h1>Expansion Panel</h1>
            <Card>
                <CardTitle>Basico</CardTitle>
                <CardText>
                    Un panel de expansion que puede colapsarse para ocultar su contenido
                </CardText>
                <ExtendPanel title={"Panel Extendible 1"}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolore sunt minima numquam ut quae eveniet aliquid, nisi a similique,
                    suscipit nemo quos amet nam quo quam possimus deserunt provident quibusdam?
                </ExtendPanel>
                <ExtendPanel title={"Panel Extendible 2"}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolore sunt minima numquam ut quae eveniet aliquid, nisi a similique,
                    suscipit nemo quos amet nam quo quam possimus deserunt provident quibusdam?
                </ExtendPanel>
            </Card>
        </div>
    );
}