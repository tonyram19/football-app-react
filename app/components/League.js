"use strict";
import React from 'react';

class League extends React.Component {
    constructor(props) {
        super(props);

        this.switchView = this.switchView.bind(this);
    }

    switchView() {
        this.props.setCurrentLeague(this.props.league.id);
        this.props.setTableView();
    }

    render() {
        return (
            <div>
                <a href="#" onClick={() => this.switchView()}>
                    {this.props.league.caption}
                </a>
            </div>
        );
    }
}

export default League;
