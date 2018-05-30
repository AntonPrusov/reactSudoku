import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Rules from './Rules';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route exact path="/about" component={About} />
			<Route exact path="/rules" component={Rules} />
		</div>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
