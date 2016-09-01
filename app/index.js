"use strict";
import React from 'react';
import {render} from 'react-dom';

import LeagueList from './components/LeagueList';
import LeagueTable from './components/LeagueTable';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.setCurrentLeague = this.setCurrentLeague.bind(this);
        this.setTableView = this.setTableView.bind(this);
        this.setLeaguesView = this.setLeaguesView.bind(this);

        this.state = {
           currentLeague: 0,
           currentView: 'leagues'
        };

    }

    setCurrentLeague(leagueID) {
        this.setState({
            currentLeague: leagueID
        });
    }

    setTableView() {
        this.setState({
            currentView: 'leagueTable'
        });
    }

    setLeaguesView() {
        this.setState({
            currentView: 'leagues'
        });
    }

    render() {
        if (this.state.currentView == 'leagues')
        {
            return(<LeagueList setTableView={this.setTableView} setCurrentLeague={this.setCurrentLeague}/>);
        }
        else if (this.state.currentView == 'leagueTable') {
            return(<LeagueTable currentLeague={this.state.currentLeague} />);
        }

    }
}

render(<App/>, document.getElementById('app'));
