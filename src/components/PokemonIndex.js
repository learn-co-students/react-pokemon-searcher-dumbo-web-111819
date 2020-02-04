import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    searchText: ""
  }

  filterCollection = (pokemons) => {
    return pokemons.filter(pokemon => pokemon.name.includes(this.state.searchText))
  }

  handleSearchChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.handleSearchChange} />
        <br />
        <PokemonCollection filterCollection={this.filterCollection}/>
      </Container>
    )
  }
}

export default PokemonPage
