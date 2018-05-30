import React, { Component } from 'react';
import './App.css';
import SudokuField from './SudokuField.js';
import LeftAside from './LeftAside.js';
import RightAside from './RightAside.js';
import sudoku from './sudoku.js';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

function timeReducer(state, action) {
  const initTime = Math.round((new Date().getTime())/1000);
  if (action.type === 'NEW_GAME'){
        return action.time
    }

    return state || initTime;
}

function taskReducer(state, action) {
  const difficulty = (state && state.difficulty) || 'easy';
   const newSudocu = sudoku.generate(difficulty);
  const completeSudocu = sudoku.solve(newSudocu);
  if (action.type === 'NEW_GAME'){
        return {newSudocu, completeSudocu, currentSudocu: newSudocu, difficulty}
    }
  else if (action.type === 'SOLVE') {
        return {
          newSudocu: state.newSudocu,
          currentSudocu: state.completeSudocu,
          completeSudocu: state.completeSudocu,
          difficulty: difficulty
        }
  }
  else if (action.type === 'TRY_AGAIN') {
        return {
          newSudocu: state.newSudocu,
          currentSudocu: state.newSudocu,
          completeSudocu: state.completeSudocu,
          difficulty: difficulty
        }
  }
  else if (action.type === 'USER_INPUT') {
        return {
          newSudocu: state.newSudocu,
          currentSudocu: Object.assign({}, state.currentSudocu, {
            [action.target]: action.value
          }),
          completeSudocu: state.completeSudocu,
          difficulty: difficulty
        }
  }
  else if (action.type === 'CHECK') {          
        return {
          errorsList: sudoku.getConflicts(state.currentSudocu),
          newSudocu: state.newSudocu,
          currentSudocu: state.currentSudocu,
          completeSudocu: state.completeSudocu,
          difficulty: difficulty
        }
  }
  else if (action.type === 'DIFFICULTY') {
        return {
          newSudocu: state.newSudocu,
          currentSudocu: state.currentSudocu,
          completeSudocu: state.completeSudocu,
          difficulty: action.difficulty
        }
  }

    return {newSudocu, completeSudocu, currentSudocu: newSudocu, difficulty: difficulty};
}




const reducers = combineReducers({
    task: taskReducer,
    time: timeReducer
});
export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">    
                <LeftAside />
                <SudokuField />
                <RightAside />
            </div>    
        </Provider>
    );
  }
};

export default App;