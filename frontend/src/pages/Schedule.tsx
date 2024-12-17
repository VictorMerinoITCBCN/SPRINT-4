import { Nav } from "../components/Nav"
import { useLogin } from "../hooks/useLogin"
import { ScheduleTable } from "../components/ScheduleTable"
import { useSchedule } from "../hooks/useSchedule"

export function SchedulePage() {

    const user = useLogin({ validRoleIDs: [] })
    const schedule = useSchedule({user})

    if (user) return (
        <>
            <Nav role={user?.role.id}/>
            <main>
                {schedule ? <ScheduleTable schedule={schedule} /> : null}
            </main>
        </>
    ); else return null
}