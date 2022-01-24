export enum TipoNotificacao {
    SUCESSO,
    FALHA,
    ATENCAO
}

export interface INotificacao {
    id: number
    tipo: TipoNotificacao,
    titulo: string,
    texto: string
}