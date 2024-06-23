import './componentes.css';
import { generateUniqueId } from './helpers/uid';

export function DataTable({ headers, elements }) {
    return (
        <table>
            <thead>
                <tr>
                    {
                        headers.map(head =>
                            <th key={generateUniqueId} className="table-titles">{head.title}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    elements.map((item,index)=>
                        <tr key={generateUniqueId}>
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