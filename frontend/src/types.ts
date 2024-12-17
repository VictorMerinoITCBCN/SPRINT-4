export type Assistance = {
    id: number
    status: string
    date: string
    student: User
    subject: Subject
    teacher: User
}

export type User = {
    id: number
    name: string
    last_name: string
    email: string
    role: Role
    group: Group
    token?: string
}

type Role = {
    id: number
    name: string
}

type Group = {
    id: number
    name: string
}

export type Subject = {
    id: number
    name: string
    room: string,
    teacher: User,
    weekday : string,
    start_time: string,
    end_time: string
}

export type Schedule = {
    monday: Subject[],
    tuesday: Subject[],
    wednesday: Subject[],
    thursday: Subject[],
    friday: Subject[]
}