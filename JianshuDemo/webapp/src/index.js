import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './style'
import './static/iconfont/iconfont'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
