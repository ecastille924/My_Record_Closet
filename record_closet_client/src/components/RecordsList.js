import React from 'react'
import { connect } from 'react-redux'
import RecordsContainer from './RecordsContainer'

function RecordsList({ records }){
    
    const listStyle = {
        backgroundColor: "#ccddff",
        padding: "10px",
        fontFamily: "Gorgia"
    }

    
    return (
        
        <div>
            <RecordsContainer />
            {records.map(record => <li style={listStyle} key= {record.id} >{record.title} - {record.artist} - *{record.condition}*</li>)}

        </div>
    )
}

const mapStateToProps = state => {
    return { records: state.records}
}

export default connect(mapStateToProps)(RecordsList)