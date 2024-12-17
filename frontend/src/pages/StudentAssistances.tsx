import { Nav } from "../components/Nav"
import { StudentAssistanceTable } from "../components/StudentAssistanceTable"
import { useLogin } from "../hooks/useLogin"

export const StudentAssistances = () => {
    const user = useLogin({validRoleIDs:[1]})

    if (user) return (
        <>
        <Nav role={user?.role.id} />
        <main>
            <StudentAssistanceTable userId={user.id}/>
        </main>
        </>
    )
}