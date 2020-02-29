import React, { Component } from 'react';
import SocialPageShort from './SocialPageShort';
import SocialPageLong from './SocialPageLong';
import { Link } from 'react-router-dom';


class SocialPageForm extends Component{

    constructor(props){
        super(props)
        this.state={
            flag:true,
            test: ""
        }
    }

    buttonHandlerShort = () =>{
        this.setState({flag:false})
        this.setState({test:"Short"})
    }

    buttonHandlerLong = () =>{
        this.setState({flag:false})
        this.setState({test:"Long"})
    }

    render(){

        let content;
        if(this.state.flag===true)
        {
            content = <div>
            <h1>Which Social Card you want to create</h1>
            <button type="button" onClick={this.buttonHandlerShort}>Short Social Card</button>
            <button type="button" onClick={this.buttonHandlerLong}>Long Social Card</button>
        </div>
        }
        return(
            <div>
            {content}
            {(this.state.test === "") ? null : (this.state.test === "Short" ? <SocialPageShort/> :(this.state.test === "Long" ? <SocialPageLong/> : null))}
            </div>
        );
    }
}

export default SocialPageForm;