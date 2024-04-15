import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAppSelector } from "../../redux/store"


export const PrivateRoute = () => {
    const {isAuth} = useAppSelector(state => state.auth)
    const location = useLocation()

    return isAuth ? (
    <Outlet /> 
        
    ): (
        <Navigate to="/login" state={{ from: location }} replace />
    )
}