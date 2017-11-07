import React from 'react';

const CharacterDetail = (props) => {

  if (!props.character) return null;
  return (
    <div className="character-box">
  <p>{props.character.name}</p>
  <p>{props.character.dateOfBirth}</p>
  <img src={props.character.image}/>
</div>
)
}

export default CharacterDetail ;
