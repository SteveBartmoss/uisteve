import './componentes.css';

export function SelectBox({label,items}) {
    return (
        <div className='form-select-box'>
            <select className='select-box'>
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