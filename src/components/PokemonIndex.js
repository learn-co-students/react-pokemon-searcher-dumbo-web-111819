import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ""
  }
  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
    .then(r => r.json())
    .then((pokemons) => {
      this.setState({
        pokemons
      })
    })
  }

  onChange=(evt)=>{
    this.setState({
      searchTerm: evt.target.value
    })

  }

  handleSearch=()=>{
    let newArray = this.state.pokemons.filter(pokemon =>{
      return pokemon.name.includes(this.state.searchTerm)
    })
    return newArray
  }

  addNewPokemon=(newPokemon)=>{
    let {name, hp, frontUrl, backUrl} = newPokemon
    let newPokeObj = {name,  stats:[{name:"hp", value:hp}], sprites:{front: frontUrl, backUrl}}

    let newPokeArr = [newPokeObj, ...this.state.pokemons]
    this.setState({
      pokemons: newPokeArr
    })
  }



  render() {
    console.log(this.state.pokemons);
    console.log(this.state.searchTerm);
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}  />
        <br />
        <Search onChange={this.onChange} />
        <br />
        <PokemonCollection pokemons={this.handleSearch()} />
      </Container>
    )
  }
}

export default PokemonPage
