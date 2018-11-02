import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createHashHistory'

import routes from './routes'
import './index.less'
import DevTools from './exspa/client/devTools'
import configureStore from './redux/store/configureStore'


const history = createHistory()

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                { routes }
                {/*{process.env.NODE_ENV === 'development' ? <DevTools /> : ''}*/}
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
