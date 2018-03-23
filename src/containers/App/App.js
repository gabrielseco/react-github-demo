// @flow
import React, { Component } from 'react';
import { Header } from './../../components';
import './App.scss';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Header/>
    );
  }
}

export default App;
