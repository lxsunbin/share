import React from 'react';
import App from './App';
// import {BrowserRouter as Router,Route} from 'react-router-dom';       //可以跟服务器配合
import {HashRouter as Router} from 'react-router-dom';        //无法跟服务器配合
// import {MemoryRouter as Router,Route} from 'react-router-dom';      //对地址完全不修改——刷新就没

import {render} from 'react-dom';

render((
    <Router>
        <App/>
    </Router>
), document.getElementById('root'));
