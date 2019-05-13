import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div>{this.props.isSignIn ? <h1>welcom</h1> : <h1>NoNoNo</h1>}</div>
    );
  };
};

export default Main;