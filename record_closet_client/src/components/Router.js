import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import RecordsList from './RecordsList'

const Router = () => {
    return (
        <Switch>
            <Route exact path= '/' component= {Home} />
            <Route exact path = '/about' component= {About} />
            <Route exact path= '/Records' component= {RecordsList} />
        </Switch>
    )
}

export default Router