export interface MenuItemType {
    title: string
    type?: MenuActionType
    children?: MenuItemType[]
    icon?:string 
    action: string
}

export enum MenuActionType {
    LINK,
    ROUTER,
    WINDOW,
}