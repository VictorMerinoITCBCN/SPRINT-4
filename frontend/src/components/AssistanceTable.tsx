import { Assistance } from "../types"
import "./AssistanceTable.css"
import { AssistanceRow } from "./AssistanceRow"

export const AssistanceTable = ({assistances: assistances}: {assistances: Assistance[]}) => {
  return (
    <table className="AssistanceTable">
      <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Assistance</th>
            <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {assistances.map(data => <AssistanceRow key={data.id} data={data}/>)}
      </tbody>
      </table>
  )
}