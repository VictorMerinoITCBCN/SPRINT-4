import { useEffect, useState } from "react"
import { Nav } from "../components/Nav"
import { useLogin } from "../hooks/useLogin"
import { API } from "../API"
import { Schedule } from "../types"
import { ScheduleTable } from "../components/ScheduleTable"

export function SchedulePage() {

    const user = useLogin({ validRoleIDs: [] })
    const [schedule, setSchedule] = useState<Schedule>()

    useEffect(() => {
        const getSchedule = async () => {
            let endpoint = ""
            if (user?.role.id == 1) endpoint = "/schedule/" + user?.id
            else if (user?.role.id == 2) endpoint = "/schedule/teacher/" + user.id
            const sch = await API.get(endpoint)
            setSchedule(sch.schedule)
            console.log(sch)
        }

        if (user) getSchedule()
    }, [user])

    if (user) return (
        <>
            <Nav role={user?.role.id}/>
            <main>
                {schedule ? <ScheduleTable schedule={schedule} /> : null}
            </main>
        </>
    ); else return null
}