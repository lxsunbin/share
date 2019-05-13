import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import Index from './components/Index';
import Game from './components/Game';
import Food from './components/Food';

class App extends Component{
    constructor(...args){
        super(...args);
    }

    render(){
        return (
        <div>
            <nav className="nav">
                <Link to="/">首页</Link>
                <Link to="/game">游戏</Link>
                <Link to="/food">食品</Link>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/game" component={Game} />
            <Route path="/food" component={Food} />
        </div>
        );
    }
}

export default App;
