import './componentes.css';

export function SelectBox({label,items,placeMessage}) {
    return (
        <div className='form-select-box'>
            <select className='select-box' defaultValue=''>
                <option value='' >{placeMessage}</option>
                {
                    items.map(item =>
                        <option value={item.value}>{item.title}</option>
                    )
                }
            </select>
            <span className='select-box-label'>{label}</span>
        </div>
    )
}