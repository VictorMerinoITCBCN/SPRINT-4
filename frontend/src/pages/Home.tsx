import { useEffect, useState } from "react"
import { Nav } from "../components/Nav"
import { ScheduleTable } from "../components/ScheduleTable"
import { useLogin } from "../hooks/useLogin"
import { useSchedule } from "../hooks/useSchedule"
import { Schedule, Subject } from "../types"
import { SubjectTable } from "../components/SubjectTable"
import "./Home.css"


export const Home = () => {

    const user = useLogin({validRoleIDs: []})
    const schedule: Schedule | undefined = useSchedule({user})
    const [nextSubjects, setNexSubjects] = useState<Subject[]>()

    useEffect(() => {
        if (!schedule || !user) return

        const date = new Date()
        const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

        let day = date.getDay()

        day = (day === 0) ? 6: day -1

        const subjects = [...schedule[daysOfWeek[day]]]

        const actualSecs = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()

        const newSubjects = subjects.filter(s => 28800 < s.start_time)

        setNexSubjects(newSubjects.slice(0,3))

    },[user, schedule])

    if (user) return (
        <>
        <Nav role={user?.role.id}/>        
        {user.role.id <= 2 ? (
            <main className="Home">
            <h1>Hello {user.name}</h1>          

            <section className="subject-info">
                    {user.role.id == 1 ? (
                        <>
                        <h2>Last assistance</h2>
                        <div className="last-assistance present">
                            <small>present</small>
                            <h3>08:03</h3>
                            <span>Matemticas</span>
                        </div>
                        </>
                    ): null}
    
                    <h2>Nex subjects</h2>
                    {nextSubjects ? (
                        nextSubjects.map(s => (
                            <div>
                                <SubjectTable subject={s}/>
                            </div>
                        ))
                    ) : null}
            </section>
            {schedule ? <ScheduleTable schedule={schedule} /> : null}
        </main>
        ): <h1>Hello {user.name}</h1>}
        </>
    )
}