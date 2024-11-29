enum Method {
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}

export class API {
    static base = "http://127.0.0.1:8000"

    static async get(endPoint: string) {
        try {
            const res = await fetch(API.base + endPoint)
            if (!res.ok) {
                throw new Error(`Error ${res.status}: ${res.statusText}`)
            }
            const data = await res.json()
            return data
        } catch (error) {
            console.error("Error fetching data:", error)
            throw error
        }
    }

    private static async bodyMethod(method: Method, endPoint: string, body: any) {
        try {
            const response = await fetch(API.base + endPoint, {
                method: method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body)
            })
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`)
            }
            const data = await response.json()
            return data
        } catch (error) {
            console.error(`Error with ${method} request:`, error)
            throw error
        }
    }

    static async put(endPoint: string, body: any) {
        return API.bodyMethod(Method.PUT, endPoint, body)
    }

    static async post(endPoint: string, body: any) {
        return API.bodyMethod(Method.POST, endPoint, body)
    }
}
