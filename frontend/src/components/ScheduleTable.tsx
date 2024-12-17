import { Schedule } from "../types"
import "./ScheduleTable.css"
import { SubjectTable } from "./SubjectTable"

interface props {
    schedule: Schedule
}

export const ScheduleTable = ({schedule: schedule}: props) => {
    return (
        <div className="schedule">
            <h3>Monday</h3>
            <h3>Tuesday</h3>
            <h3>Wednesday</h3>
            <h3>Thursday</h3>
            <h3>Friday</h3>

            <div className="column">
                {schedule.monday.map(subject => (
                    <SubjectTable subject={subject} />
                ))}
            </div>

            <div className="column">
                {schedule.tuesday.map(subject => (
                    <SubjectTable subject={subject} />
                ))}
            </div>

            <div className="column">
                {schedule.wednesday.map(subject => (
                    <SubjectTable subject={subject} />
                ))}
            </div>

            <div className="column">
                {schedule.thursday.map(subject => (
                    <SubjectTable subject={subject} />
                ))}
            </div>

            <div className="column">
                {schedule.friday.map(subject => (
                    <SubjectTable subject={subject} />
                ))}
            </div>
        </div>
    )
}