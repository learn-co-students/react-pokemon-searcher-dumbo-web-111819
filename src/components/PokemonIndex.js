import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemons: [],
    search: ""
  }

  componentDidMount (){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemons => {
      this.setState({
        pokemons: pokemons
      })
    })
  }

  onChangeSearch = (newValue) => {
    // console.log(newValue)
    this.setState({
      search: newValue
    })
  }

  updateSearch = () => {
    // console.log(this.state.pokemons)
   let newArr = this.state.pokemons.filter(pokemon => {
    let searchValue = this.state.search.toLowerCase()
     return pokemon.name.toLowerCase().includes(searchValue)
   })
   return newArr
  }

  createNewPokemon = (newPokemon) => {
    console.log(newPokemon)
     let newArr = [...this.state.pokemons, newPokemon]

     this.setState({
       pokemons: newArr
     })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createNewPokemon={this.createNewPokemon}/>
        <br />
        <Search onChangeSearch={this.onChangeSearch} search={this.state.search} />
        <br />
        <PokemonCollection pokemons={this.updateSearch()}/>
      </Container>
    )
  }
}

export default PokemonPage
