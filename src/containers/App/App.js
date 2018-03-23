// @flow
import React, { Component } from 'react';
import { Header, Footer } from './../../components';
import utils from './../../stylesheets/utils/flexbox.scss';
import './App.scss';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={utils.flexboxSticky}>
        <Header />
        <main className={utils.flex1}>
          <h2>This is going to be the main content</h2>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
