export enum TypeNotification {
    SUCESSO,
    FALHA,
    ATENCAO
}

export interface INotification {
    titulo: string
    texto: string
    tipo: TypeNotification
    id: number
}