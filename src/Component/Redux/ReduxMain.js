import React, { Component } from 'react';
import {} from 'react-redux';
import { connect } from 'react-redux';
import { add } from './Action';
import { sub } from './Action';
class ReduxMain extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				Age : <span>{this.props.age}</span>
				<button onClick={this.props.onAdd}>Add</button>
				<button onClick={this.props.onSub}>Sub</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		age: state.age,
	};
};

const mapDispatchToProps = dispatch => ({
	onAdd: () => dispatch(add()),
	onSub: () => dispatch(sub()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxMain);
