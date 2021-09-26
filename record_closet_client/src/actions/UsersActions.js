export const fetchUsers = () => {

    const token = localStorage.getItem("jwt")

    return (dispatch) => {
        fetch('http://localhost:3000/users'),{
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        // .then(resp => resp.json())
        // .then(users => dispatch({type: 'FETCH_USERS', payload: users}))
    }
}

// export const saveUser = user => {
//     return (dispatch) => {
//         fetch('http://localhost:3000/users', {
//             method: 'POST',
//             body: JSON.stringify(user),
//             headers: { 'Content-type': 'application/json'}
//         })
//         .then(resp => resp.json())
//         .then(user => dispatch({type: "SAVE_USER", payload: user}))
    
//     }
// }