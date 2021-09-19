import React from 'react'
import { connect } from 'react-redux'
import App from './App'
import RecordsContainer from './RecordsContainer'
import '../App.css'


function RecordsList({ records }){

    return (
        
        <div className= "records-list">
            <RecordsContainer />
            <h3>My Record Collection:</h3>
            {records.map(record => <li key= {record.id} >{record.title} - {record.artist} - *{record.condition}*</li>)}

        </div>
    )
}

const mapStateToProps = state => {
    return { records: state.records }
}

export default connect(mapStateToProps)(RecordsList)