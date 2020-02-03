import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  render() {
    // console.log(this.props.pokemonData)
    let pokemonCards = this.props.pokemonData.map((pokemonObj) => {
      return <PokemonCard key={pokemonObj.id} deletePokemon={this.props.deletePokemon} pokemonData={pokemonObj}/>
    })
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {pokemonCards}
      </Card.Group>
    )
  }
}

export default PokemonCollection
