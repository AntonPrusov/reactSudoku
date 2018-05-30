import React, { Component } from 'react';
import './App.css';
import {store} from './App.js';

import { connect } from 'react-redux';
import { Link } from "react-router-dom";



class AboutBtn extends Component {
  render() {
    return (
        <Link to={`/about`} className="aside_btn">О проекте</Link>
      );
  }
};

class RulesBtn extends Component {
  render() {
    return (
        <Link to={`/rules`} className="aside_btn">Правила</Link>
      );
  }
};

class DifficultySelect extends Component {
  render() {
    return (
        <div>
          <button id="difficultyBtn" className="aside_btn">Сложность</button>
          <select id="difficultySelect" className="right_aside_btn" onChange={this.difficultySelect}>
            <option value="easy">Легко</option>
            <option value="medium">Средне</option>
            <option value="hard">Тяжело</option>
          </select>
        </div>
      );
  }
  difficultySelect(e) {
  	store.dispatch ({
  		type: 'DIFFICULTY',
  		difficulty: e.target.value
  	});
  }
};

class Timer extends Component {
	constructor(props) {
		//
		super(props);
		this.state = { start: Math.round((new Date().getTime())/1000)};

		this.interval = setInterval(() => {
			const currentTime = Math.round((new Date().getTime())/1000) - this.props.time;
			const minute = Math.floor(currentTime / 60);
			const seconds = Math.floor(currentTime - (minute * 60));

			this.setState({
				timer: `${minute.toString().length === 1 ? '0' + minute : minute}:${seconds.toString().length === 1 ? '0' + seconds : seconds}` 
			})
		},1000);
	}
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div id="timer">
        <p>Время игры:</p>
        <p>{this.state.timer}</p> 
      </div>
    );
  }
}  

class RightAside extends Component {
	render() {
		return (
			<aside id="right_aside">
	          <Timer/>
	          <AboutBtn/>
	          <RulesBtn/>
	          <DifficultySelect/>
	        </aside>
		);
	}
}

const mapStateToProps = function(store) {
  return {
    time: store.time
  };
}

Timer = connect(mapStateToProps)(Timer);

export default RightAside;