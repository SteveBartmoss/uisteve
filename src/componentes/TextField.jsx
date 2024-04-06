import "../App.css"

export function TextField({label,ayuda}) {
    return (
        <>
            <div className="form">
                <input type="text" id="field" className="text-field" placeholder={ayuda} />
                <label for="field" className="text-field-label">{label}</label>
            </div>
        </>
    );
}