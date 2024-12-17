import { useState } from "react"
import { Assistance } from "../types"
import { Spiner } from "./Spiner"
import { API } from "../API"

export const AssistanceRow = ({data}: {data: Assistance}) => {

    const [assistID, setAssistID] = useState(data.id)
    const status = ["present", "absent", "justified"]
    const [index, setIndex] = useState(status.indexOf(data.status))
    const [updateBtnContent, setUpdateBtnContent] = useState<string | JSX.Element>("Update")
    const [disableBtn, setDisableBtn] = useState(true) 

    const buttonClassName = "status " + status[index]
    
    const toggleState = () => {
        const newIndex = (index + 1) % status.length
        setIndex(newIndex)

        setDisableBtn(false)
        setUpdateBtnContent("Update")
    }

    const updateAssistance = async () => {
        const token = localStorage.getItem("token")
        setUpdateBtnContent(<Spiner/>)
        setDisableBtn(true)

        const body = {
            "student_id": data.student.id,
            "subject_id": data.subject.id,
            "assistance_status": status[index]
          }

        const newID = await API.put("/assistance/"+ assistID + "?token=" + token, body)

        setAssistID(newID.id)

        setUpdateBtnContent(<span className="material-symbols-outlined">check</span>)
    }

    return (
    <tr>
        <td>{data.student.name} {data.student.last_name}</td>
        <td>{data.student.email}</td>
        <td className="assistance">
            <button className={buttonClassName} onClick={toggleState}>{status[index]}</button>
            <button disabled={disableBtn} onClick={updateAssistance}>{updateBtnContent}</button>
        </td>
        <td>{data.date}</td>
    </tr>
    )
}