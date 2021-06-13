import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import About from './Component/About/About';
import Project from './Component/Projects/Project';
import Works from './Component/Work/Works'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/projects" component={Project} exact />
                <Route path="/work" component={Works} exact />
                <Route path="/profile" component={About} exact />
                <Redirect path="/" to="/profile" exact/>
            </Switch>
        </Router>
    )
}

export default Routes
