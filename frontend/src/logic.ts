export const parseTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    return formattedTime
}

export const stringToHex = (str: string) => {
    let hex = 0
    for (let i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i)
    }

    hex += 790

    return hex
}