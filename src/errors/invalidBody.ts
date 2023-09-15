export function invalidBodyError(erros: Array<string>) {
    return {
        type: "invalidBody",
        message: erros
    }
}