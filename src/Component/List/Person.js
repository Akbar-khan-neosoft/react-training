import React, { Component } from 'react';
import Radium from 'radium';
class Person extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const style = {
			border: '1px solid black',
			width: '50%',
			height: '100px',
			alignContent: 'center',
			justifyContent: 'center',
			margin: '1%',
		};

		const buttonStyle = {
			width: '100px',
			backgroundColor: 'Green',
			':hover': {
				backgroundColor: 'lightgreen', //Using radium to perform hover action as we cant do that normally
			},
		};
		return (
			<div style={style}>
				<button type="button" onClick={this.props.click} style={buttonStyle}>
					Remove
				</button>
				<p>
					Hey, My name is {this.props.name} and my age is {this.props.age}
				</p>
				<p>
					Change Name Here<input type="text" onChange={this.props.change}></input>
				</p>
			</div>
		);
	}
}

export default Radium(Person);
