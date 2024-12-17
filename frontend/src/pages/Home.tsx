import { Nav } from "../components/Nav"
import { useLogin } from "../hooks/useLogin"

export const Home = () => {

    const user = useLogin({validRoleIDs: []})

    if (user) return (
        <>
        <Nav role={user?.role.id}/>        
        <main>
            <h1>Hello {user.name}</h1>
        </main>
        </>
    ); else return null
}