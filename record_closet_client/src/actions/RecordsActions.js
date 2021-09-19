export const fetchRecords = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/records')
        .then(resp => resp.json())
        .then(records => dispatch({type: 'FETCH_RECORDS', payload: records}))
    }
}