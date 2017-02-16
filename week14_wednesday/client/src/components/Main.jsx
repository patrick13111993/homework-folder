import React from 'react';
import Characters from './Characters.jsx';
import Home from './Home.jsx';
import {Link} from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
      <h4>Main App</h4>
      <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/characters">Characters</Link></li>
      </ul>
      {this.props.children}
      </div>
      )
  }
}

export default Main;
