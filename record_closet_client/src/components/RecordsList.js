import React from 'react'
import { connect } from 'react-redux'
import RecordsContainer from './RecordsContainer'
import '../App.css'


const RecordsList = ({ records }) => {

    return (
        
        <div className= "records-list">
            <RecordsContainer />
            <h3>My Record Collection:</h3>
            {records.map(record => 
                <ul key= {record.id}>
                    <li>{record.title} - {record.artist} - *{record.condition}*</li>
                </ul>)}

        </div>
    )
}

const mapStateToProps = state => {
    return { records: state.records }
}

export default connect(mapStateToProps)(RecordsList)