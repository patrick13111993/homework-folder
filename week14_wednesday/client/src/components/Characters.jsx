import React from 'react';
import Character from './Character.jsx';

class Characters extends React.Component {

  constructor(props) {
    super(props);
  }

  render(props){
    console.log(this.props);
    if (!this.props.characters.results) {
      return <p>Loading...</p>
    }

    return(

      <div>
        <h4> Characters </h4>
        {this.props.characters.results.map(function(character, index) {
          return (
            <Character
              key={index}
              name={character['name'].label}
              homeworld={character['homeworld'].label}
            />
          )
        })};
      </div>
    )
  }
}

export default Characters;
