import React from 'react';
import ReactDOM from 'react-dom';

import Main from '../components/Main.jsx';
import Home from '../components/Home.jsx';
import Characters from '../components/Characters.jsx';

class StarWarsContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }



  componentDidMount() {
    const url = "https://swapi.co/api/people/";
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status !== 200){
        return;
      }
      const data = JSON.parse(request.responseText);
      this.setState({ characters : data });

    }.bind(this);
    request.send();
  }

  render() {
    return (
      <div>
      <Characters characters={this.state.characters}/>
      </div>
      );

  };
}


export default StarWarsContainer;