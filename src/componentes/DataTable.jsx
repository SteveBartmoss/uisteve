import './componentes.css';
import { generateUniqueId, generateUniqueIdV2, generateUniqueIdV3 } from './helpers/uid';

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
                    elements.map(item=>
                        <tr key={generateUniqueIdV2}>
                            {
                                headers.map(head =>
                                    <td key={generateUniqueIdV3} className="table-content">{item[head.key]}</td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}