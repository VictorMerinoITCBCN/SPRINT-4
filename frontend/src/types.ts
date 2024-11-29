export type Assistance = {
    id: number
    status: string
    date: string
    student: User
    subject: Subject
    teacher: User
}

type User = {
    id: number
    name: string
    last_name: string
    email: string
}

type Subject = {
    id: number
    name: string
}