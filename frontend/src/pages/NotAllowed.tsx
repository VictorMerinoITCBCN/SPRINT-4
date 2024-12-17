import { Link } from "react-router-dom"

export const NotAllowed = () => {
    return (
        <>
        <h1>You are not allowed to do that!!</h1>
        <Link to={"/"} >Go Back</Link>
        </>
        
    )
}