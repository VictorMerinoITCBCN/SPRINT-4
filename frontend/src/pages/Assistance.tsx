import { useEffect, useState } from "react"
import { Assistance } from "../types"
import { useParams } from "react-router-dom"
import { API } from "../API"
import { useLogin } from "../hooks/useLogin"
import { Nav } from "../components/Nav"
import { AssistanceTable } from "../components/AssistanceTable"

export const AssistancePage = ()=> {
    const [assistances, setAssistances] = useState<Assistance[]>([])
    const { id } = useParams()
    const user = useLogin({validRoleIDs: [2, 3]})
  
    useEffect(() => {
      const fetchAssistances = async () => {
        try {
          const token = localStorage.getItem("token")
          const assistances = await API.get(`/assistance/subject/${id}?token=${token}`)
          setAssistances(assistances.assistances)
        } catch (error) {
          console.error("Error fetching assistances:", error)
        }
      }
  
      if (user) fetchAssistances()
    }, [id, user])

    if (user) return (
        <>
        <Nav role={user?.role.id}/>
        <main>
            {assistances ? <AssistanceTable assistances={assistances} /> : null}
        </main>
        </>
    ); else return null
}