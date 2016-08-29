"use strict";
import React from 'react';
import Request from 'react-http-request';
import axios from 'axios';

import League from './League';

class LeagueList extends React.Component {
    constructor(props) {
        super(props);

        this.getLeagues = this.getLeagues.bind(this);
        this.setList = this.setList.bind(this);
        this.showLoadingScreen = this.showLoadingScreen.bind(this);
        this.showLeaguesScreen = this.showLeaguesScreen.bind(this);

        this.state = {
            list: []
        };

        this.getLeagues();
    }

    setList(league) {
        this.setState({
            list: league
        });
    }

    getLeagues() {
        let scope = this;

        axios.get('https://api.football-data.org/v1/competitions/?season=2016', {
            headers: {'X-Auth-Token': '1d8e93dbf9104d589b510b458144851b'}
        })
        .then(function (response) {
            scope.setList(response.data);
        })
        .catch(function (error) {
            console.log("My error: " + error);
        });
    }

    showLoadingScreen() {
        return (
            <div className="container">
            <h2>Loading...</h2>
            </div>
        );
    }

    showLeaguesScreen() {
        return(
            <div className="container">
                <h1>Competitions</h1>
                <table className="table-striped table-condensed">
                    <thead>
                        <tr>
                            <th>League</th>
                            <th>Teams</th>
                            </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.list.map((league, key) => {
                            return(
                                <tr key={league.id}>
                                    <td><League league={league} /></td>
                                    <td>{league.numberOfTeams}</td>
                                </tr>
                            );
                        })
                    }

                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        if (this.state.list.length == 0) {
            return this.showLoadingScreen();
        } else {
            return this.showLeaguesScreen();
        }
    }
}

export default LeagueList;
