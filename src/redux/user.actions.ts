export const FETCH_USER = 'FETCH_USER'
export const ERROR_FETCH_USER = 'ERROR_FETCH_USER'

interface UserAction {
    type: typeof FETCH_USER
    user: string
}

interface ErrorUserAction {
    type: typeof ERROR_FETCH_USER
    error: string
}
export const fetchUser = (user:string):UserAction => {
    return {
        type: FETCH_USER,
        user
    }
}
export const errorFetchUser = (error:string):ErrorUserAction => {
    return {
        type: ERROR_FETCH_USER,
        error
    }
}

export const fetchUserThunk = (url:string) => {
    return (dispatch:any) => {
        fetch(url)
        .then(response => response.json())
        .then(user => {

            dispatch(fetchUser(user))
    })
    .catch((error) =>{
     dispatch(errorFetchUser(error))
})
    }

}
export type UserActions = UserAction | ErrorUserAction