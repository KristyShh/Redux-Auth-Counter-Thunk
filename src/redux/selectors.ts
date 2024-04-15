import { RootState } from "./store";

export const countSelector = (state: RootState) => state.count
export const userSelector = (state: RootState) => state.user