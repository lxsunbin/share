import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class GameList extends Component{
    constructor(...args){
        super(...args);

        this.state={
            game_arr: []
        };
    }

    async componentDidMount(){
        try{
            let res=await fetch('/api/game_list');
            let {err, data}=await res.json();
            if(err){
                alert('请求失败，请刷新重试')
            }else{
                this.setState({
                    game_arr: data
                })
            }
        }catch(e){
            alert('请求失败，请刷新重试')
        }
    }

    render(){
        return (
            <div>
                <h2>游戏列表</h2>
                <ul>
                    {this.state.game_arr.map(game=>(
                        <li key={game.id}>
                            <Link to={'/game/'+game.id}>{game.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
