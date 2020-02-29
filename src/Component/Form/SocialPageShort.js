import React, { Component } from 'react';
import SocialCardShort from './SocialCardShort';



class SocialPageShort extends Component {

    constructor(props) {
        super(props)
        this.flag = false
        this.state = {
            name: "",
            age: "",
            mobile: ""
        }

    }

    onChangehandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onClearHandler = () => {

        this.setState({
            name: "",
            age: "",
            mobile: " "

        })
    }

    onSubmitHandler = () => {

        this.setState({ flag: true })

    }



    render() {

        let createSocialCard
        let data = { ...this.state }
        if (this.state.flag === true) {

            createSocialCard = <div>
                <SocialCardShort data={data} />
            </div>
        }

        return (
            <div>
                <form>
                    <label>Name : </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onChangehandler}></input><br></br>
                    <label>Age : </label>
                    <input type="text" name="age" value={this.state.age} onChange={this.onChangehandler}></input><br></br>
                    <label>Mobile Number : </label>
                    <input type="text" name="mobile" value={this.state.mobile} onChange={this.onChangehandler}></input><br></br>
                    <br></br>
                    <button type="button" onClick={this.onClearHandler}>Clear</button>
                    <button onClick={this.onSubmitHandler} type="button">Create Social Card</button>
                </form>
                {createSocialCard}
            </div>
        );
    }
}

export default SocialPageShort;