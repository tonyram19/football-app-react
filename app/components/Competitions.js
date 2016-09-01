"use strict";
import React from 'react';
import axios from 'axios';

import League from './League';
import Loading from './Loading';

class Competitions extends React.Component {

    constructor(props) {
        super(props);

        this.getLeagues = this.getLeagues.bind(this);
        this.setList = this.setList.bind(this);
        this.showLeaguesScreen = this.showLeaguesScreen.bind(this);

        this.state = {
            list: []
        };

        this.getLeagues();
    }

    setList(leaguesList) {
        this.setState({
            list: leaguesList
        });
    }

    getLeagues() {
        let scope = this;

        axios.get('https://api.football-data.org/v1/competitions/?season=2016', {
            headers: {'X-Auth-Token': '1d8e93dbf9104d589b510b458144851b'}
        })
        .then(function (response) {
            scope.setList(response.data);
            console.log(response.data);
        })
        .catch(function (error) {
            console.log("My error: " + error);
        });
    }

    showLeaguesScreen() {
        return(
            <div className="container">
                <h1>Competitions</h1>
                <table className="table-striped table-condensed">
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.list.sort((a, b) => {
                            return (b.caption - a.caption);
                        }).map((league, key) => {
                            return(
                                <tr key={league.id}>
                                    <td><League league={league} setTableView={this.props.setTableView}/></td>
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
            return <Loading />;
        } else {
            return this.showLeaguesScreen();
        }
    }
}

export default Competitions;
