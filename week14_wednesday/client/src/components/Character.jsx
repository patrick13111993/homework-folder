import React from 'react';

class Character extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

  return (
    <div>
    <h4>{props.character.name}</h4>
    </div>
  )};
};

export default Character;