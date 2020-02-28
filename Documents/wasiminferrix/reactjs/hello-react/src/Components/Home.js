
import React, { Component } from 'react';
import Menu from './src/Components/Menu';

class Home extends Component {
  render() {
    return (
        <div>
          <h2>Home</h2>
          <Menu id="hello" />
        </div>
    );
  }
}

export default Home;