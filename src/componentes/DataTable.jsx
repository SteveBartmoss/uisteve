import './componentes.css';

export function DataTable({ headers, elements }) {
    return (
        <div>
            <thead>
                <tr>
                    {
                        headers.map(head =>
                            <th className="table-titles">{head.title}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    elements.map(item=>
                        <tr>
                            {
                                headers.map(head =>
                                    <td className="table-content">{item[head.key]}</td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </div>
    )
}