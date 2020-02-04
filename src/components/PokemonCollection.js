import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props)
    let pokemonObjects = this.props.pokemonsData.map(pokemon => <PokemonCard key={pokemon.id} pokemonData={pokemon}/>)
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {pokemonObjects}
      </Card.Group>
    )
  }
}

export default PokemonCollection
