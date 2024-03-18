import "../App.css"
import { Card } from "./Card";

export function TextField() {
    return (
        <>
            <Card>
                <div className="entry-area">
                    <input className="basic" type="text" />
                    <div className="label-line">Ingresa tu nombre</div>
                </div>
            </Card>
        </>
    );
}