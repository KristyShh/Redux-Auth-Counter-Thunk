import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./auth.reducer";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { countReducer } from "./counter.reducer";
import {thunk} from "redux-thunk";
import { userReducer } from "./user.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    count: countReducer,
    user: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;


 export const useAppDispatch : () => AppDispatch = useDispatch
 export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;