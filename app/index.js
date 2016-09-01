"use strict";
import React from 'react';
import {render} from 'react-dom';

import Competitions from './components/Competitions';
import LeagueTable from './components/LeagueTable';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.setCurrentLeague = this.setCurrentLeague.bind(this);
        this.setTableView = this.setTableView.bind(this);
        this.setLeaguesView = this.setLeaguesView.bind(this);

        this.state = {
           currentLeague: 0,
           currentView: 'competitions'
        };

    }

    setCurrentLeague(leagueID) {
        this.setState({
            currentLeague: leagueID
        });
    }

    setTableView(leagueID) {
        this.setState({
            currentView: 'leagueTable'
        });
        this.setCurrentLeague(leagueID);
    }

    setLeaguesView() {
        this.setState({
            currentView: 'competitions'
        });
    }

    render() {
        if (this.state.currentView == 'competitions')
        {
            return(<Competitions setTableView={this.setTableView} />);
        }
        else if (this.state.currentView == 'leagueTable') {
            return(<LeagueTable currentLeague={this.state.currentLeague} />);
        }

    }
}

render(<App/>, document.getElementById('app'));
