import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  state={
    pokemons: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemons => this.setState({
      pokemons
    }))
  }

  renderAllPokemons = () => {
    // this.props.filterCollection(this.state.pokemons)
    return this.props.filterCollection(this.state.pokemons).map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.renderAllPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
