import React, { Component } from 'react'
import {connect} from 'react-redux'

import{fetchRecords} from '../actions/RecordsActions'
import RecordsForm from './RecordsForm'

class RecordsContainer extends Component {

    componentDidMount(){
        this.props.fetchRecords()
    }

    render() {
        return (
            <div>
                <RecordsForm />
            </div>
        )
    }
}

export default connect(null, {fetchRecords})(RecordsContainer)
