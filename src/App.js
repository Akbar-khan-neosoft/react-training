import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import GettingStarted from './Component/Getting Started/GettingStarted';
import Home from './Component/Home/Home';
import { Link } from 'react-router-dom';
import Lifecycle from './Component/Lifecycle/Lifecycle';
import Hooks from './Component/Hooks/Hooks';
import HooksUseState from './Component/Hooks/HooksUseState/HooksUseState';
import HooksUseEffect from './Component/Hooks/HooksUseEffect/HooksUseEffect';
import SocialPageForm from './Component/Form/SocialPageForm';
import SocialPageShort from './Component/Form/SocialPageShort';
import SocialPageLong from './Component/Form/SocialPageLong';
import ReduxApp from './Component/Redux/ReduxApp';
import List from './Component/List/List';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Router>
				<div className="App">
					<nav className="nav">
						<Link to="/hooks">
							<button>Hooks</button>
						</Link>
						<Link to="/socialcard">
							<button>Social Card</button>
						</Link>
						<Link to="/">
							<button>Home</button>
						</Link>
					</nav>
					<Route exact path="/" component={Home}></Route>
					<Route path="/gettingstarted" component={GettingStarted}></Route>
					<Route exact path="/hooks" component={Hooks}></Route>
					<Route path="/lifecycle" component={Lifecycle}></Route>
					<Route path="/hooksusestate" component={HooksUseState}></Route>
					<Route path="/hooksuseeffect" component={HooksUseEffect}></Route>
					<Route exact path="/socialcard" component={SocialPageForm}></Route>
					<Route path="/socialcardshort" component={SocialPageShort}></Route>
					<Route path="/socialcardlong" component={SocialPageLong}></Route>
					<Route path="/redux" component={ReduxApp}></Route>
					<Route path="/list" component={List}></Route>
				</div>
			</Router>
		);
	}
}

export default App;
