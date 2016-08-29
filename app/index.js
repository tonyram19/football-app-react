"use strict";
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'

import LeagueList from './components/LeagueList';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={LeagueList}/>
            </Router>
        );
    }
}

render(<App/>, document.getElementById('app'));
