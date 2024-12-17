import "./AssistanceTable.css"
import { useAssistance } from "../hooks/useAssistance"

export const StudentAssistanceTable = ({userId: userId}: {userId: number}) => {

    const assistances = useAssistance({userId})

    return (
        <table className="AssistanceTable">
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Assistance</th>
                    <th>Room</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {assistances?.map(a => (
                    <tr key={a.id}>
                        <td>{a.subject.name}</td>
                        <td className={"status " + a.status}>{a.status}</td>
                        <td>{a.subject.room}</td>
                        <td>{a.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}