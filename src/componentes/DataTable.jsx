
export function DataTable({ headers, elements }) {
    return (
        <div>
            <thead>
                <tr>
                    {
                        headers.map(head =>
                            <th>{head.title}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    elements.map(item=>
                        <tr>
                            {
                                head.map(head =>
                                    <td>{item[head.key]}</td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </div>
    )
}