import { useEffect, useState } from "react"
import { Assistance } from "../types"
import "./AssistanceTable.css"
import { AssistanceRow } from "./AssistanceRow"
import { useParams } from "react-router-dom"
import { API } from "../API"

export const AssistanceTable = () => {
  const [assistances, setAssistances] = useState<Assistance[]>([])
  const { id } = useParams()

  useEffect(() => {
    const fetchAssistances = async () => {
      try {
        const assistances = await API.get(`/subject/${id}/assistance`);
        setAssistances(assistances.assistances);
      } catch (error) {
        console.error("Error fetching assistances:", error);
      }
    };
  
    fetchAssistances();
  }, [id]);

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