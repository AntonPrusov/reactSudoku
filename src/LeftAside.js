import React, { Component } from 'react';
import './App.css';
import {store} from './App.js';




class NewGameBtn extends Component {
	constructor(props) {
		super(props);
		this.newGame = this.newGame.bind(this);
	}
  	newGame () {
  		store.dispatch({
            type: 'NEW_GAME',
            time: Math.round((new Date().getTime())/1000)
        })
  	};
  	render() {  	
   		return (
   		    <button id="newGameBtn" className="aside_btn" type="button" onClick={this.newGame}>Новая игра</button>
      	);
    }
};

class RestoreBtn extends Component {
	constructor(props) {
		super(props);
		this.tryAgain = this.tryAgain.bind(this);
	}
  render() {
    return (
        <button id="restoreBtn" className="aside_btn" onClick={this.tryAgain}>Начать заново</button>
      );
  }
  	tryAgain() {
  		store.dispatch({
            type: 'TRY_AGAIN'
        })
  	}
};

class SolveBtn extends Component {
	constructor(props) {
		super(props);
		this.solve = this.solve.bind(this);
	}
  render() {
    return (
        <button id="solveBtn" className="aside_btn" onClick={this.solve}>Решить</button>
      );
  }
  solve() {
	store.dispatch({
            type: 'SOLVE'
        })
  }
};

class CheckIsSolvedBtn extends Component {
	constructor(props) {
		super(props);
		this.check = this.check.bind(this);
	}
  render() {
    return (
        <button id="newGameBtn" className="aside_btn" onClick={this.check}>Проверить</button>
      );
  }
  check() {
  	store.dispatch({
            type: 'CHECK'
        })
  }
};

class LeftAside extends Component {
	render() {
		return (
				<aside id="left_aside">
		          <NewGameBtn/>
		          <RestoreBtn/>
		          <SolveBtn/>
		          <CheckIsSolvedBtn/>
		        </aside>
			);
	}
}

export default LeftAside;