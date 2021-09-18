import { combineReducers } from "redux";
import { recordsReducer } from "./recordsReducer";
import { usersreducer } from "./usersReducer"

export const rootReducer = combineReducers({
    users: usersreducer,
    records: recordsReducer
})