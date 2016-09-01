"use strict";
import React from 'react';
import axios from 'axios';

class LeagueTable extends React.Component {
    constructor(props) {
        super(props);

        this.getTable = this.getTable.bind(this);
        this.setTable = this.setTable.bind(this);
        this.showLoadingScreen = this.showLoadingScreen.bind(this);
        this.showLeaguesScreen = this.showLeaguesScreen.bind(this);

        this.state = {
            table: null
        };

        this.getTable();
    }

    getTable() {
        let scope = this;

        axios.get('https://api.football-data.org/v1/competitions/' + this.props.currentLeague + '/leagueTable', {
            headers: {'X-Auth-Token': '1d8e93dbf9104d589b510b458144851b'}
        })
        .then(function (response) {
            scope.setTable(response.data);
            console.log(response.data);
        })
        .catch(function (error) {
            console.log("My error: " + error);
        });
    }

    setTable(table) {
        this.setState({
            table: table
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
                <h1>{this.state.table.leagueCaption}</h1>
                <a href="#" onClick={()=> this.props.setCompetitionsView()}>Go back</a>
                <table className="table-striped table-condensed">
                    <thead>
                        <tr>
                            <th>Pos.</th>
                            <th>Team</th>
                            <th>Pts.</th>
                            <th>P</th>
                            <th>W</th>
                            <th>L</th>
                            <th>D</th>
                            <th>G</th>
                            <th>GA</th>
                            <th>GD</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.table.standing.map((team, key) => {
                            return(
                                <tr key={team.teamName}>
                                    <td>{team.position}</td>
                                    <td>{team.teamName}</td>
                                    <td>{team.points}</td>
                                    <td>{team.playedGames}</td>
                                    <td>{team.wins}</td>
                                    <td>{team.losses}</td>
                                    <td>{team.draws}</td>
                                    <td>{team.goals}</td>
                                    <td>{team.goalsAgains}</td>
                                    <td>{team.goalDifference}</td>
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
        if (this.state.table == null) {
            return this.showLoadingScreen();
        } else {
            return this.showLeaguesScreen();
        }
    }
}

export default LeagueTable;
