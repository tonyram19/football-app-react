"use strict";
import React from 'react';

class League extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href="#">{this.props.leagueName}</a>
            </div>
        );
    }
}

export default League;
