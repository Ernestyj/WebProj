import React from 'react';

import './App.less';
import Life from './views/demo/Life'
import Main from './Main'
import Router from "./manage_router";


export default class App extends React.Component {
    render() {
        return (

            <div className="App">

                <Main/>
                {/*<Router/>*/}

                {/*<div style={{padding: '20px'}}>*/}
                    {/*<Life></Life>*/}
                {/*</div>*/}

            </div>
        );
    }
}
