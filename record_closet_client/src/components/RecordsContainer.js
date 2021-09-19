import React, { Component } from 'react'
import {connect} from 'react-redux'

import{fetchRecords} from '../actions/RecordsActions'

class RecordsContainer extends Component {

    componentDidMount(){
        this.props.fetchRecords()
    }

    render() {
        return (
            <div>
                Records Container
            </div>
        )
    }
}

export default connect(null, {fetchRecords})(RecordsContainer)
