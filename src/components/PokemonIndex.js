import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = { 
    pokemon: []
  }
  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json()) 
    .then(pokemon => ( 
      this.setState({
        pokemon
      })
    ))
  }

  addPokemon = (newPoke) => { 
    console.log(newPoke)
    // newArray = 
    this.setState({
      pokemon: [...this.state.pokemon, newPoke]
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={() => console.log('🤔')} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
