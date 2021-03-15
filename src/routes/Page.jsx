import React, { Component } from 'react';
import {
    Router,
    Route
} from 'react-router';
import {
    HelloWorld,
} from '@src/components/pages';

class Routes extends Component {
    getRoutes = () => {
        return (
            <Route>
                <Route path='/' component={HelloWorld} />
            </Route>
        )
    }

    routes = this.getRoutes();

    render() {
        return (
            <div>
                <Router>{this.routes}</Router>
            </div>
        )
    }
}

export default Routes;
