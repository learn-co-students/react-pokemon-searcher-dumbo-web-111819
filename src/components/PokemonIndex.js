import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: ""
  }

  updateSearch = event => {
    this.setState({
      search: event.target.value
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
      .then(r=>r.json())
      .then(data=>{
        this.setState({
          pokemon: data
        })
      })
  }

  addPokemon = (newPoke) => {
    let pokearr = [...this.state.pokemon, newPoke]
    this.setState({
      pokemon: pokearr
    })
  }


  
  render() {
    let filteredPokemon = this.state.pokemon.filter(poke=> poke.name.includes(this.state.search))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search search={this.state.search} updateSearch={this.updateSearch}/>
        <br />
        <PokemonCollection pokemon={filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
