"use strict";
import React from 'react';

class League extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href="#" onClick={() => this.props.setTableView(this.props.league.id)}>
                    {this.props.league.caption}
                </a>
            </div>
        );
    }
}

export default League;
