import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import Characters from './components/Characters.jsx';
import Home from './components/Home.jsx';
import StarWarsContainer from './containers/StarWarsContainer.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

window.onload = function(){
  ReactDOM.render(
    <div>
    <StarWarsContainer />
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="characters" component={StarWarsContainer} />
     </Route>
    </Router>
    </div>,
    document.getElementById('app')
  );
}
