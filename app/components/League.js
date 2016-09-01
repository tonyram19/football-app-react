"use strict";
import React from 'react';

class League extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="text-success" onClick={() => this.props.setTableView(this.props.league.id)}>
                    {this.props.league.caption}
                </div>
            </div>
        );
    }
}

export default League;
