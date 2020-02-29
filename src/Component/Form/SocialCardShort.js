import React, { Component } from "react"
import './SocialCardShort.css'


class SocialCardShort extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { name, age, mobile } = this.props.data

        console.log(this.props.data);
        return (

            <div className="card">
                <div className="title">Social Card</div>
                <hr></hr>
                <div className="data">
                    <div>Name : {name}</div><br></br>
                    <div>Age : {age}</div><br></br>
                    <div> Mobile : {mobile}</div><br></br>
                </div>
                <hr></hr>
                <div className="footer">Issued By Govt Of India</div>
            </div>
        );
    }
}

export default SocialCardShort;
