import { useEffect, useState } from "react"
import { Schedule, User } from "../types"
import { API } from "../API"

export const useSchedule = ({user: user}: {user: User | undefined}) => {
    const [schedule, setSchedule] = useState<Schedule>()

    useEffect(() => {
        const getSchedule = async () => {
            let endpoint = ""
            if (user?.role.id == 1) endpoint = "/schedule/" + user?.id
            else if (user?.role.id == 2) endpoint = "/schedule/teacher/" + user.id
            const sch = await API.get(endpoint)
            setSchedule(sch.schedule)
        }

        if (user) getSchedule()
    }, [user])

    return schedule
}