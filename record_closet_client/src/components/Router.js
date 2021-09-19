import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import RecordsContainer from './RecordsContainer'

const Router = () => {
    return (
        <Switch>
            <Route exact path= '/' component= {Home} />
            <Route exact path = '/about' component= {About} />
            <Route exact path= '/Records' component= {RecordsContainer} />
        </Switch>
    )
}

export default Router