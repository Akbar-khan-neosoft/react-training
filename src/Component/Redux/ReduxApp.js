import React, { Component } from 'react';
import { createStore } from 'redux';
import Reducer from './Reducer';
import { Provider } from 'react-redux';
import ReduxMain from './ReduxMain';

const store = createStore(Reducer);

class ReduxApp extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Provider store={store}>
				<div>
					<ReduxMain />
				</div>
			</Provider>
		);
	}
}

export default ReduxApp;
