export const recordsReducer = (state= [], action) => {
    switch(action.type){
        case 'FETCH_RECORDS':
            return action.payload
        case 'POST_RECORD':
            return [...state, action.payload]
        default: return state

    }
}