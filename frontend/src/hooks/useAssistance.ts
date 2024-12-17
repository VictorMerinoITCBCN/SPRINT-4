import { useEffect, useState } from "react"
import { Assistance } from "../types"
import { API } from "../API"

export const useAssistance = ({userId: userId}: {userId: number | undefined}) => {
    const [assistances, setAssistances] = useState<Assistance[]>()
    
    useEffect(() => {
        const getAssistances = async () => {
            const response = await API.get(`/assistances/${userId}`)
            setAssistances(response.assistances)
        }

        if (userId) getAssistances()
    },[userId])

    return assistances
}