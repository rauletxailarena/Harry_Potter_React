import React from 'react';
import CharacterSelect from '../components/CharacterSelect.jsx'
import CharacterDetail from '../components/CharacterDetail.jsx'

class CharacterContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      characters: [],
      currentCharacter: null
    }
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    const request = new XMLHttpRequest();
    request.open("get", "http://hp-api.herokuapp.com/api/characters")
    request.send()
    request.addEventListener("load", () => {
      const parsedData = JSON.parse(request.responseText)
      this.setState({characters: parsedData})
    })
  }

  handleCharacterSelected(index){
    const selectedCharacter = this.state.characters[index]
    this.setState({currentCharacter: selectedCharacter})
  }

  render(){
    return (
      <div className="character-select-and-details">
      <CharacterSelect characters={this.state.characters}
      onCharacterSelected={this.handleCharacterSelected}/>

      <CharacterDetail character={this.state.currentCharacter}/>
      </div>
    )
  }

}


export default CharacterContainer;
