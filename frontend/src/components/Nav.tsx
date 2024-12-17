import { Link, useNavigate } from "react-router-dom"
import "./Nav.css"
import { useState } from "react"

export const Nav = ({role: role}: {role: number}) => {
    
    const [openNav, setOpenNav] = useState(false)
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    const StudentLinks = () => {
        return (
            <>
                <Link to={"/"}>Home</Link>
                <Link to={"/schedule/"}>Schedule</Link>
                <Link to={"/student/assistances"}>Assistances</Link>
            </>
        )
    }

    const TeacherLinks = () => {
        return (
            <>
                <Link to={"/"}>Home</Link>
                <Link to={"/schedule/"}>Schedule</Link>
                <Link to={"/assistances"}>Assistances</Link>
                <Link to={"/matriculate"}>Matriculate</Link>
            </>
        )
    }
    
    const AdminLinks = () => {
        return (
            <>
            <Link to={"/"}>Home</Link>
            <Link to={"/register/student"}>Register Student</Link>
            <Link to={"/register/teacher"}>Register Teacher</Link>
            <Link to={"/register/admin"}>Register Admin</Link>
            <Link to={"/matriculate"}>Matriculate</Link>
            </>
        )
    }
    
    return (
        <nav className="Nav">
            <button className="toggle-nav-btn" onClick={() => setOpenNav(!openNav)}>
                <span className="material-symbols-outlined">menu</span>
            </button>

            <div className={openNav ? "open nav" : "close nav"}>
                {role == 1 ? <StudentLinks />: null}
                {role == 2 ? <TeacherLinks />: null}
                {role == 3 ? <AdminLinks />: null}
            </div>

            <div style={{display: "flex"}}>
                <Link className="profile" to={"/user"}><span className="material-symbols-outlined">person</span></Link>
                <button className="logout" onClick={handleLogOut}>
                    <span className="material-symbols-outlined">
                        logout
                    </span>
                </button>
            </div>
        </nav>
    )
}