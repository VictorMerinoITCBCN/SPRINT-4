import { FormEvent, useState } from "react"
import { API } from "../API"
import "./RegisterUser.css"

export const RegisterUser = () => {
    
    const [responseMsg, setResponseMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const name = e.target[0].value
        const last_name = e.target[1].value
        const email = e.target[2].value
        const group_id = e.target[3].value

        const response = await API.post("/register/student", {
            name,
            last_name,
            email,
            group_id
        })

        if (response.ok) setResponseMsg(response.msg)
        else setErrorMsg(response.error)
    }

    return (
        <form className="Register"onSubmit={handleSubmit}>
            <h1>Register Student</h1>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Group ID" />
            {errorMsg ? <span className="error-msg msg">{errorMsg}</span> : null}
            {responseMsg ? <span className="response-msg msg">{responseMsg}</span> : null}
            <button type="submit">Register</button>
        </form>
    )
}