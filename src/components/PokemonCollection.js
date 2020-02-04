import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  

  render() {
    let pokemonMapper = this.props.pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokeObj={pokemon}/>)
    return (
      <Card.Group itemsPerRow={6}>
        {pokemonMapper}
      </Card.Group>
    )
  }
}

export default PokemonCollection
