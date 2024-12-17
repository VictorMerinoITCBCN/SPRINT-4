import { FormEvent, useState } from "react"
import { API } from "../API"
import "./LogForm.css"
import { useLogin } from "../hooks/useLogin"
import { Nav } from "../components/Nav"
import { useParams } from "react-router-dom"

export const RegisterUser = () => {

    const user = useLogin({validRoleIDs: [3]})

    const [responseMsg, setResponseMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const params = useParams()
    const role = params.role

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const name = e.target[0].value
        const last_name = e.target[1].value
        const email = e.target[2].value
        const password = e.target[3].value

        let group_id 
        let endpoint = ""

        if (role == "student") {
            group_id = e.target[4].value
            endpoint = "/register/1?token=" + user?.token
        }
        else if (role == "teacher") {
            group_id = 2
            endpoint = "/register/2?token=" + user?.token
        }
        else if (role == "admin") {
            group_id = 3
            endpoint = "/register/3?token=" + user?.token
        }

        const response = await API.post(endpoint, {
            name,
            last_name,
            email,
            password,
            group_id,
        })

        if (response.ok) setResponseMsg(response.msg)
        else setErrorMsg(response.error)
    }

    if (user) return (
        <>
        <Nav role={user?.role.id} />        
        <form className="LogForm"onSubmit={handleSubmit}>
            <h1>Register {params.role}</h1>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            {role == "student" ? <input type="text" placeholder="Group ID" />: null}
            {errorMsg ? <span className="error-msg msg">{errorMsg}</span> : null}
            {responseMsg ? <span className="response-msg msg">{responseMsg}</span> : null}
            <button type="submit">Register</button>
        </form>
        </>
    ); else return null
}