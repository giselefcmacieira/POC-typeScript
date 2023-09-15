export function conflictError(erro: string) {
    return {
        type: "conflict",
        message: erro
    }
}