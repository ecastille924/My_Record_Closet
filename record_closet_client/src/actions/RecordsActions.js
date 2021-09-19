export const fetchRecords = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/records')
        .then(resp => resp.json())
        .then(records => dispatch({type: 'FETCH_RECORDS', payload: records}))
    }
}

export const postRecord = record => {
    return (dispatch) => {
        fetch('http://localhost:3000/records', {
            method: 'POST',
            body: JSON.stringify(record),
            headers: { 'Content-type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(record => dispatch({type: "POST_RECORD", payload: record}))
    
    }
}