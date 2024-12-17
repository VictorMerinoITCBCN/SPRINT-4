import { parseTime, stringToHex } from "../logic"
import {Subject} from "../types"

export const SubjectTable = ({subject: subject}: {subject: Subject}) => {
    return (
        <div className="subject" style={{background: "#"+stringToHex(subject.name)}}>
            <h4>{subject.name}</h4>
            <div>
                <small>{subject.room}</small>
                <small>{subject.teacher.name} {subject.teacher.last_name}</small>
            </div>
            <span>{parseTime(parseInt(subject.start_time))}</span>
        </div>
    )
}