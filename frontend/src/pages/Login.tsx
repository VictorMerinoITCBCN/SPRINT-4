import { FormEvent, useState } from "react"
import "./LogForm.css"
import { API } from "../API"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const [errorMsg, setErrorMsg] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value

        const response = await API.post("/login", {email, password})

        if (response.ok) {
            localStorage.setItem("token", response.token)
            navigate("/")
        } else setErrorMsg(response.error)
    }

    return (
        <form className="LogForm" onSubmit={handleSubmit}>
            <h1>Log in</h1>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password"/>
            {errorMsg ? <span className="error-msg msg">{errorMsg}</span> : null}
            <button type="submit">Log in</button>
        </form>
    )
}