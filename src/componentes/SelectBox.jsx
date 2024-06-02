import './componentes.css';

export function SelectBox() {
    return (
        <div className='form-select-box'>
            <select className='select-box'>
                <option value="Selecciona">Selecciona una opcion</option>
                <option value="Steve">Steve</option>
                <option value="Enrique">Enrique</option>
                <option value="Kevin">Kevin</option>
            </select>
            <span className='select-box-label'>Opcion</span>
        </div>
    )
}