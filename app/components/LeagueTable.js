"use strict";
import React from 'react';

class LeagueTable extends React.Component {
    constructor(props) {
        super(props);
        this.loadRequest = this.loadRequest.bind(this);
    }

    loadRequest(url) {
        let headers = {'X-Auth-Token': '1d8e93dbf9104d589b510b458144851b'};
        return (
            <Request
            url={url}
            method='get'
            accept='application/json'
            headers={headers}
            verbose={true}
            >
            {
                ({error, result, loading}) => {
                    if (loading) {
                        return (
                            <div className="container">
                            <h1>Loading...</h1>
                            </div>
                        );
                    } else {
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
                                        result.body.map((league, key) => {
                                            return(
                                                <tr key={league.id}>
                                                    <td><League leagueName={league.caption} /></td>
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
                }
            }
            </Request>
        );
    }

    render() {
        return (
            <div>
                <h1> {this.props.currentLeague}</h1>
            </div>
        );
    }
}

export default LeagueTable;
