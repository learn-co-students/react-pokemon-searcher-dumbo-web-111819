import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    let pokemonMapper = this.props.pokemon.map(pokemon => { 
     return <PokemonCard pokemon={pokemon} />
    })
    return (
      <Card.Group itemsPerRow={6}>
  <h1>Hello From Pokemon Collection {pokemonMapper}</h1>
      </Card.Group>
    )
  }
}

export default PokemonCollection
