import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Home extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="home">
				<ul className="home-ul">
					<Link to="/gettingstarted">
						<li>Getting Started</li>
					</Link>
					<Link to="/hooks">
						<li>Hooks</li>
					</Link>
					<Link to="/lifecycle">
						<li>Lifecycle</li>
					</Link>
					<Link to="/socialcard">
						<li>Social Card</li>
					</Link>
					<Link to="/redux">
						<li>Redux</li>
					</Link>
					<Link to="/list">
						<li>List</li>
					</Link>
				</ul>
			</div>
		);
	}
}

export default Home;
