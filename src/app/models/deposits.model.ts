export interface ServerResponseDto {
    deposits: DepositsDto[]
}

export interface DepositsModel extends DepositsDto {
    selected?: boolean,
}

export interface DepositsDto {
    id?: string,
    resource?: string,
    city?: string,
    x?: number,
    y?: number,
    icon?: string,
    visible?: boolean
}