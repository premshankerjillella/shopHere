import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

import Header from './components/header/header'
import Signup from './components/signup/signup'
import Signin from './components/signin/signin'
function Routes() {
    return (
        <Router>
            <Header />
            <Route exact={true} path="/signup">
                <Signup/>
            </Route>
            <Route exact={true} path="/signin">
                <Signin/>
            </Route>
        </Router>
    );
}

export default Routes;