import './componentes.css';

export function DataTable({ headers, elements }) {
    return (
        <table>
            <thead>
                <tr>
                    {
                        headers.map(head =>
                            <th key={head.title} className="table-titles">{head.title}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    elements.map((item,index)=>
                        <tr key={index}>
                            {
                                headers.map(head =>
                                    <td className="table-content">{item[head.key]}</td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}