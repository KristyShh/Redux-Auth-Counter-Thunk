import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { actionLogin, createPasswordAction, createUserNameAction } from "../../redux/auth.actions";

export const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.state?.from?.pathname || '/';
    const [userName, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (userName && password) {
            dispatch( actionLogin );
            dispatch(createUserNameAction(userName) );
            dispatch(createPasswordAction(password));
            navigate(path, { replace: true });
        } else {
            setError("Please provide both login and password.");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="username">User Name</label>
            <input 
                type="text" 
                id="username" 
                value={userName} 
                onChange={(event) => setLogin(event.target.value)} 
            />
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)} 
            />
            <button type="submit">Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
};
