import React, { Component } from 'react'
import {connect} from 'react-redux'

import{fetchRecords} from '../actions/RecordsActions'
import RecordsFrom from './RecordsFrom'

class RecordsContainer extends Component {

    componentDidMount(){
        this.props.fetchRecords()
    }

    render() {
        return (
            <div id="wrapper">
                <RecordsFrom />
            </div>
        )
    }
}

export default connect(null, {fetchRecords})(RecordsContainer)
