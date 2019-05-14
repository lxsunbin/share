import React, {Component} from 'react';

export default class Game extends Component{
    constructor(...args){
        super(...args);

        this.state={
            info: {}
        };
    }

    //?
    async componentDidMount(){
        try{
            let {id}=this.props.match.params;
            let res=await fetch('/api/game/'+id);
            let {err, data}=await res.json();
            if(err){
                alert('请求失败，请刷新')
            }else{
                this.setState({
                info: data
                })
            }
        }catch(e){
            alert('请求失败，请刷新')
        }
    }

    render(){
        console.log('render');
        let {id}=this.props.match.params;
        let info=this.state.info;
        return (
            <div>
                <h2>
                    <a href={info.href}>{info.name}</a>
                </h2>
                <h3>游戏ID：{id}</h3>
                <h4>游戏名称：{info.name}</h4>
                <p>发行商：{info.company}</p>
                <p>发行日期：{info.date}</p>
            </div>
        )
    }
}




    // shouldComponentUpdate(nextProps, nextState){
    //     //props变了 || state变了
    //     return nextProps.match.params.id!=this.props.match.params.id || this.state.info.id!=nextState.info.id
    // }