import { combineReducers } from "redux";
import { recordsReducer } from "./recordsReducer";
import { usersReducer } from "./usersReducer"

export const rootReducer = combineReducers({
    users: usersReducer,
    records: recordsReducer
})