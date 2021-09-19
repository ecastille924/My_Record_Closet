import React, { Component } from 'react'
import { connect } from 'react-redux'

import { postRecord } from '../actions/RecordsActions'

class RecordsForm extends Component {

state= {
    title:"",
    artist:"",
    condition:"",
    year:"",
    rating:""
}

handleInput = (e) => {
    const {name, value} = e.target

    this.setState({
        [name]: value
    })
}

handleRecordSubmit = (e) =>{
    e.preventDefault()
    this.props.postRecord(this.state)
}

    render() {
        return (
            <form onSubmit={this.handleRecordSubmit}>
                <label>Title:</label>
                <input type="text" value={this.state.title} onChange={this.handleInput} name='title'/>
                <br/>

                <label>Artist:</label>
                <input type="text" value={this.state.artist} onChange={this.handleInput} name='artist'/>
                <br/>

                <label>Condition:</label>
                <input type="text" value={this.state.condition} onChange={this.handleInput} name='condition'/>
                <br/>

                <label>Year:</label>
                <input type="text" value={this.state.year} onChange={this.handleInput} name='year'/>
                <br/>

                <label>Rating:</label>
                <input type="text" value={this.state.rating} onChange={this.handleInput} name='rating'/>
                <br/>

                <input type='submit' value='Submit Record'/>

            </form>
        )
    }
}

export default connect(null, {postRecord})(RecordsForm)