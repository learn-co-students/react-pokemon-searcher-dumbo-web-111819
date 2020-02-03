import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemonData => {
      this.setState({
        pokemons: pokemonData
      })
    })
  }

  handleSearch = (evt) => {
    let {value} = evt.target
    this.setState({
      search: value
    })
  }

  newPokemonArr = (newPokemon) => {
    let {pokemons} = this.state
    let newArr = [newPokemon, ...pokemons]
    // console.log(newArr)
    this.setState({
      pokemons: newArr
    })
  }

  handleDelete = (pokemonId) => {
    // console.log(pokemonId)
    fetch(`http://localhost:3000/pokemon/${pokemonId}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(emptyObj => {
      if (emptyObj){
        let filteredPokemon = this.state.pokemons.filter((pokemonObj) => {
          return pokemonObj.id !== pokemonId
        })
        // console.log("I'm being deleted", pokemonId)
        this.setState({
          pokemons: filteredPokemon
        }) 
      }
    })
  }

  showPokemons = () => {
    let {search, pokemons} = this.state
    let showPokemon = pokemons.filter((pokemonObj) => {
      return pokemonObj.name.toLowerCase().includes(search.toLowerCase())
    })
    return showPokemon
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.newPokemonArr}/>
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemonData={this.showPokemons()} deletePokemon={this.handleDelete}/>
      </Container>
    )
  }
}

export default PokemonPage
