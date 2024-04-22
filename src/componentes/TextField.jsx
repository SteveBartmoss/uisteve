import { useState } from "react";

export function TextField({label}) {

    const [text,setText] = useState("")

    const handleChange=(event)=>{
        setText(event.target.value)
    }

    return (
        <>
            <div className="form">
                <input type="text" id="prueba" value={text} onChange={handleChange} className="text-field" placeholder='' />
                <label htmlFor="field" className="text-field-label">{label}</label>
            </div>
        </>
    );
}