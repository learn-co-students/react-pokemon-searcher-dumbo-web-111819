import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    searchText: "",
    pokemons: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemons => this.setState({
      pokemons
    }))
  }

  filterCollection = (pokemons) => {
    console.log('example: ', pokemons[0]);
    return pokemons.filter(pokemon => pokemon.name.includes(this.state.searchText))
  }

  handleSearchChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  createNewPokemon = ({name, hp, frontUrl, backUrl}) => {
    console.log(name, hp, frontUrl, backUrl);
    let newPokemon = {
      name: name,
      stats: [{
        value: parseInt(hp), name: 'hp'
      }],
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }
    console.log(newPokemon);
    this.postNewPokemon(newPokemon)
  }

  postNewPokemon = (newPokemon) => {
    // fetch('http://localhost:3000/pokemon', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     accept: 'application/json'
    //   },
    //   body: {
    //     newPokemon
    //   }
    // })
    // .then(r => r.json())
    // .then(newPokemon => ...)

    // instead of using the return from fetch which is all messed up, 
    // will slap right on the dom w/out persisting

    let newPokemonArray = [...this.state.pokemons, newPokemon]
    this.setState({
      pokemons: newPokemonArray
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createNewPokemon={this.createNewPokemon} />
        <br />
        <Search onChange={this.handleSearchChange} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} filterCollection={this.filterCollection}/>
      </Container>
    )
  }
}

export default PokemonPage
