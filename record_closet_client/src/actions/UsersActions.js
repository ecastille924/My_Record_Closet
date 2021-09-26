export const createUser = user => {
    return (dispatch) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(user => dispatch({type: "CREATE_USER", payload: user}))
    
    }
}