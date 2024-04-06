import "../App.css"

export function TextField({label}) {
    return (
        <>
            <div className="form">
                <input type="text" id="field" className="text-field" placeholder='' />
                <label for="field" className="text-field-label">{label}</label>
            </div>
        </>
    );
}