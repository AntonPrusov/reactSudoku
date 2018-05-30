import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

class About extends Component {
	render() {
		return (
			<div className="about-rules">
				<h2>О этом проекте</h2>
				<p>Это приложение является проектом студента 
				IT-школы A-level Прусов Антона по модулю ReactJS. </p>
				<Link to="/">Вернуться к игре</Link>
			</div>
		)
	}
}

export default About;