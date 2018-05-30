import React, { Component } from 'react';

import { connect } from 'react-redux';
import {store} from './App.js';


class SudokuField extends Component {
  render() {
  	//
    return (
        <div id="sudoku_field">
        <h2>SUDOKU</h2>
          <div className="sudoku-wrapper">
            {Object.keys(this.props.task.completeSudocu).map((key, index) => {
                let className = `${key} ${index+1}`;
                if ( this.props.task.errorsList ) {
                  if ( this.props.task.errorsList.find(error => error.errorFields.includes(key)) ) {
                    className += " hasError"
                  }
                }
                if (!this.props.task.newSudocu[key]) {
                       let style = {
                          fontSize: '30px'
                        }
                  if (this.props.task.currentSudocu[key]) {
                    const ourFontSize = this.props.task.currentSudocu[key].toString().length > 1 ? '14px' : '30px';
                    console.log(ourFontSize, this.props.task.currentSudocu[key], this.props.task.currentSudocu[key].toString().length)
                    style.fontSize = ourFontSize;

                  }
              
                  return <div className="td" key={index+1}><input style={style} type="text" value={this.props.task.currentSudocu[key] || ''} className={className} key={index+1} onChange={e => this.onInputChange(e, key)}/></div>;
                } else {
                  return <div className="td" key={index+1}><span key={index+1} className={className}>{this.props.task.completeSudocu[key]}</span></div>;
                }
            })}
          </div>
        </div>
      )
  }
  componentDidMount() {
  	//
    
  }
  componentWillUpdate() {
  	
  }

  onInputChange(e, key) {
  	store.dispatch({
  		type: 'USER_INPUT',
  		target: key,
  		value: e.target.value		
  	});
  }
}

const mapStateToProps = function(store) {
  return {
    task: store.task
  };
}

SudokuField = connect(mapStateToProps)(SudokuField);



export default SudokuField;