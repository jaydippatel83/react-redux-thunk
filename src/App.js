import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import logo from './logo.svg';
import * as actionCreator from './store/action/action';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Thunk</h1>
        <div className="">
          Your Age : <span>{this.props.age}</span>
        </div>
        <div className="btn-div">
          <button onClick={this.props.onAgeUp}>Age UP</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
        </div>
        <div>
          {this.props.loading && <img src={logo} className="App-logo" />}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    age: state.age,
    loading: state.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(actionCreator.AgeUp(1)),
    onAgeDown: () => dispatch(actionCreator.AgeDown(1))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
