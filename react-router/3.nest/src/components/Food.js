import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import Bread from './foods/Bread';
import Icecream from './foods/Icecream';
import Barbecue from './foods/Barbecue';

export default class Food extends Component{
    constructor(...args){
        super(...args);
    }

    render(){
        return (
            <div>
                <nav className="nav">
                    <Link to="/food/bread/2">面包</Link>
                    <Link to="/food/icecream">冰激凌</Link>
                    <Link to="/food/barbecue">烧烤</Link>
                </nav>

                <Route path="/food/bread/:id" component={Bread} />
                <Route path="/food/icecream" component={Icecream} />
                <Route path="/food/barbecue" component={Barbecue} />
            </div>
        );
    }
}
