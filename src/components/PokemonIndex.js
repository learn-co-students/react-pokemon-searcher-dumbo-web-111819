import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchValue: ''
  }

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
    .then(r => r.json())
    // .then(console.log)
    .then((pokemonArr) => {
      this.setState({
        pokemons: pokemonArr
      })
    })
  }

    handleSearch = (event) => {
      // console.log(event.target.value)
      let value = event.target.value
      this.setState({
        searchValue: value
      })
    }

    handleSubmissionOfForm = (pokemonObj) => {
        let newPokemonArray = [...this.state.pokemons, pokemonObj]
        this.setState({
          pokemons: newPokemonArray
        })
        return newPokemonArray
    }

    filteredPokemon = () => {
      let filteredArr = this.state.pokemons.filter((pokemon) => {
        return pokemon.name.includes(this.state.searchValue)
      })
      return filteredArr
    }

  render() {
    // console.log(this.state.pokemons)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon = {this.handleSubmissionOfForm}/>
        <br />
        <Search searchValue={this.state.searchValue} onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemonsData={this.filteredPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
