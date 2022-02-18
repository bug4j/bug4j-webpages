export interface MenuItemType {
    title: string
    type?: MenuActionType
    children?: MenuItemType[]
    icon?:string 
    action: string,
    parent?: MenuItemType | null
}

export enum MenuActionType {
    LINK,
    ROUTER,
    HASH
}