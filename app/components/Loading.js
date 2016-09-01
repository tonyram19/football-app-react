"use strict";
import React from 'react';

class Loading extends React.Component {

    constructor(props) {
        super(props);

        this.showLoadingScreen = this.showLoadingScreen.bind(this);
    }

    showLoadingScreen() {
        return (
            <div className="container">
                <h2>Loading...</h2>
            </div>
        );
    }

    render() {
        return this.showLoadingScreen();
    }

}

export default Loading;
