"use strict";
import React from 'react';
import {render} from 'react-dom';
import LeagueList from './components/LeagueList';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LeagueList />
        );
    }
}

render(<App/>, document.getElementById('app'));
