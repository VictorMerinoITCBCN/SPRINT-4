import { Nav } from "../components/Nav"
import { useLogin } from "../hooks/useLogin"

export const UserInfo = () => {
    const user = useLogin({validRoleIDs: []})
    if (user) return (
        <>
        <Nav role={user?.role.id}/>        
        <main>
            {user ? (
                <div>
                    <h1>{user.name + " " + user.last_name}</h1>
                    <h2>{user?.group.name}</h2>
                    <h2>{user?.email}</h2>
                </div>
            ) : null}
        </main>
        </>
    ); else return null
}