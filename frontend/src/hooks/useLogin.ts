import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { User } from "../types"
import { API } from "../API"

export const useLogin = ({validRoleIDs: validRoleIDs}: {validRoleIDs: number[]}) => {
    const [user, setUser] = useState<User>()
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) navigate("/login")

        const getUser = async () => {
            const response = await API.post("/user", {token})
            setUser(response.user)
        }

        getUser()
    },[navigate])

    useEffect(() => {
        if (user && validRoleIDs.length > 0 && !validRoleIDs.includes(user.role.id)) {
            navigate("/not-allowed")
        }
    }, [user, validRoleIDs, navigate])

    return user
}