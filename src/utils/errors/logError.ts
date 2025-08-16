interface ErrorPros {
    name: string
    message: string
    status: number
}

export default function logError({ name, message, status }: ErrorPros) {
    const logError = {
        name,
        message,
        status,
    }

    console.error(logError)

    return null
}
