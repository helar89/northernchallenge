import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Register from './Register'
import Home from './Home'

class App extends React.Component {
    render() {
        return (
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/home' component={Home} />
            <Route path='/' component={Register} />
          </Switch>
        )
    }
}

export { App }; 