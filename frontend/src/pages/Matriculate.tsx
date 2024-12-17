import { useLogin } from "../hooks/useLogin"
import { Nav } from "../components/Nav"
import React, { useEffect, useState } from "react"
import { Subject, User } from "../types"
import { API } from "../API"

export const Matriculate = () => {
    
    const user = useLogin({validRoleIDs: [2, 3]})
    const [users, setUsers] = useState<User[]>()
    const [subjects, setSubjects] = useState<Subject[]>()
    const [msg, setMsg] = useState("")

    useEffect(() => {
        const getUsers = async () => {
            const response = await API.get("/users")
            setUsers(response.users)
        }

        if (user) {
            getUsers()
        }
    }, [user])

    useEffect(() => {
        const getSubjects = async () => {
            const response = await API.get("/subjects")
            setSubjects(response.subjects)
        }

        if (user && users) {
            getSubjects()
        }
    }, [user, users])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const userName = e.target[0].value.split(" ")[0]
        const subjectName = e.target[1].value

        const userId = users?.find(u => u.name == userName).id
        const subjectId = subjects?.find(s => s.name == subjectName).id

        const response = await API.get(`/matriculate?user_id=${userId}&subject_id=${subjectId}&token=${user?.token}`)
        setMsg(response.msg)
    }

    if (user) return (
        <>
        <Nav role={user.role.id} />

        <form className="LogForm" onSubmit={handleSubmit}>
            <h1>Matriculate Student</h1>
            {users ? (
                <>
                    <input type="text" list="users"/>
                    <datalist id="users">
                        {users.map(el => (
                            <option key={el.id} value={el.name +" "+ el.last_name}></option>
                        ))}
                    </datalist>
                </>
            ): null}

            {subjects ? (
                <>
                    <input type="text" list="subjects"/>
                    <datalist id="subjects">
                        {subjects.map(el => (
                            <option key={el.id} value={el.name}></option>
                        ))}
                    </datalist>
                </>
            ): null}
            <button type="submit">Matriculate</button>
            {msg ? <span className="response-msg msg">{msg}</span>: null}
        </form>
        </>
    )
}