import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import App from './components/App'
import {rootReducer} from './reducers/rootReducer'
import {BrowserRouter as Router } from 'react-router-dom'
import {Auth0Provider} from '@auth0/auth0-react'


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    )

    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Auth0Provider
                    domain={domain}
                    clientId={clientId}
                    redirectUri={window.location.origin} >
                    <App />
                </Auth0Provider>    
            </Router>
        </Provider>,
        document.getElementById('root')
    )