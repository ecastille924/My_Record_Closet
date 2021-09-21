import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { postRecord } from '../actions/RecordsActions'

class RecordsForm extends Component {

state= {
    title:"",
    artist:"",
    condition:"",
    year:"",
    rating:"",
    // image: {}
}

handleInput = (e) => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
}

handleRecordSubmit = (e) =>{
    e.preventDefault()
    this.props.postRecord(this.state)
    this.setState({
        title:"",
        artist:"",
        condition:"",
        year:"",
        rating:"",
        // image: ""
    })
}

    render() {
        return (
            <form onSubmit={this.handleRecordSubmit} className= 'new-rec-form'>
                <h2>Add a new record:</h2>
                <input type="text" value={this.state.title} onChange={this.handleInput} name='title' className="form-inputs" placeholder="Title:"/>
                <br/>

                <input type="text" value={this.state.artist} onChange={this.handleInput} name='artist' className="form-inputs" placeholder="Artist:"/>
                <br/>

                <input type="text" value={this.state.year} onChange={this.handleInput} name='year' className="form-inputs" placeholder="Year:"/>
                <br/>

                <select name='condition' value={this.state.condition} onChange={this.handleInput} className="form-inputs" >
                    <option value= "" disabled className="default-condition">Condition:</option>
                    <option value="Poor to Fair"> Poor (P) to Fair (F) </option>
                    <option value="Good"> Good (G) </option>
                    <option value="Very Good"> Very Good (VG) </option>
                    <option value="Very Good Plus"> Very Good Plus (VG+) </option>
                    <option value="Excellent"> Excellent (E) </option>
                    <option value="Near Mint"> Near Mint (NM) </option>
                    <option value="Mint"> Mint (M) </option>
                </select>
                <br/>

                
                <select name='rating' value={this.state.rating} onChange={this.handleInput} className="form-inputs">
                    <option value= "" disabled>Star Rating:</option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                </select>
                <br/>
                {/* <br/>
                <label>Upload Cover Art:</label><br/>
                <input type="file" id="img" name="img" accept="image/*" onChange={this.handleInput}/>
                <br/>
                <br/> */}
                <input type='submit' value='Submit Record'/>

            </form>
        )
    }
}

export default connect(null, {postRecord})(RecordsForm)
