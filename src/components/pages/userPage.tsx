import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchUserThunk } from "../../redux/user.actions";
import { userSelector } from "../../redux/selectors";

interface IUser {
    id?: string;
    name?: string;
    age?: number;
    username?: string;
    email?: string;
}

export const UserPage = () => {
    const { isAuth, userName } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(userSelector); 

    useEffect(() => {
        dispatch(fetchUserThunk('https://jsonplaceholder.typicode.com/users'))
    }, [dispatch]);

    console.log(user); 

    return (
        <div>
            <h1>{isAuth ? userName : 'Not authorized'}</h1>
            <h2>Hello {userName}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum velit corrupti asperiores voluptas ad adipisci molestiae. Velit odit eius ipsum delectus aliquid illo dolorum eveniet culpa assumenda. Possimus, officiis pariatur.</p>
            <div>
                {user && user.map((user: IUser) => ( 
                    <div key={user.id}>
                        <h3>Name: {user.name}</h3>
                        <p>UserName:{user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


