export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const USER_NAME = 'USER_NAME'
export const PASSWORD = 'PASSWORD'

interface LoginAction {
    type: typeof LOGIN  
}
interface LogoutAction {
    type: typeof LOGOUT
}
interface UserNameAction {
    type: typeof USER_NAME
    userName: string
}
interface PasswordAction {
    type: typeof PASSWORD
    password: string
}

export const actionLogin: LoginAction = {
    type: LOGIN,
}

export const actionLogout: LogoutAction = {
    type: LOGOUT, 
}

export const createUserNameAction = (userName: string): UserNameAction => {
    return {
    type: USER_NAME,
    userName
    
}
}

export const createPasswordAction= (password: string): PasswordAction => {
    return {
    type: PASSWORD,
    password
    }
}
export type AuthActions = LoginAction | LogoutAction | UserNameAction | PasswordAction