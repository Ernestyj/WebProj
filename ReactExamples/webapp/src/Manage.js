import React from 'react';

import './App.less';
import Router from "./manage_router";


export default class Manage extends React.Component {
    render() {
        return (
            <div className="App">

                <Router/>

            </div>
        );
    }
}
