import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './Login'
import About from '../components/About'
import RecordsList from './RecordsList'

const Router = () => {
    return (
        <Switch>
            <Route exact path= '/' component= {Login} />
            <Route exact path = '/about' component= {About} />
            <Route exact path= '/records' component= {RecordsList} />
            {/* <Route exact path='/signup' component={}/> */}
        </Switch>
    )
}

export default Router