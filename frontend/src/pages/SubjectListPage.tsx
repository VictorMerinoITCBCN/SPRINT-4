import { useEffect, useState } from "react"
import { Nav } from "../components/Nav"
import { useLogin } from "../hooks/useLogin"
import { API } from "../API"
import { Subject } from "../types"
import { useNavigate } from "react-router-dom"
import { stringToHex } from "../logic"
import "./SubjectListPage.css"

export const SubjectListPage = () => {

    const user = useLogin({validRoleIDs: [2, 3]})
    const [subjects, setSubjects] = useState<Subject[]>()
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        const getSubjects = async () => {
            const subjects = await API.get(`/subjects/${user?.id}?token=${token}`)
            setSubjects(subjects.subjects)
        }

        if (user) getSubjects()
    },[user])


    if (user) return (
        <>
        <Nav role={user?.role.id}/>
        <main className="SubjectList" >
            {subjects ? subjects.map(sub => (
                <div className="subject" style={{"--color": "#" + stringToHex(sub.name)}} key={sub.id}>
                    <h3>{sub.name}</h3>
                    <small>{sub.room}</small>
                    <button onClick={() => navigate("/assistance/subject/" + sub.id)}>Pasar Lista</button>
                </div>
            )) : null}
        </main>
        </>
    ); else return null
}