"use strict";
import React from 'react';

class Team extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href="#">{this.props.teamName}</a>
            </div>
        );
    }
}

export default Team;
