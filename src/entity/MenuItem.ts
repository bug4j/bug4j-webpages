export default class MenuItem {
    title!: string
    type?: MenuActionType = MenuActionType.ROUTER
    children?: MenuItem[]
    icon?:string 
    action!: string
}

export enum MenuActionType {
    LINK,
    ROUTER,
    WINDOW,
}