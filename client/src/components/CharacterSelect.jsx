import React from 'react';

const CharacterSelector = (props) => {

  const options = props.characters.map((character, index) => {
    return (
      <option value={index} key={index}>
        {character.name}
      </option>
    )
  })

  function handleEventChange(event){
    console.log("Handling event change");
    props.onCharacterSelected(event.target.value)
  }


  return (
    <select defaultValue="default" name="character-selector" id="character-selector" onChange={handleEventChange}>
      <option disabled value="default">Choose a character...</option>
      {options}
    </select>
  )

}

export default  CharacterSelector
