export function badRequestError(erro: string) {
    return {
        type: "badRequest",
        message: erro
    }
}