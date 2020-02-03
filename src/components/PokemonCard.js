import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    image: this.props.pokemonData.sprites.front
  }

  handleToggle = () => {
    let {sprites} = this.props.pokemonData
    let {image} = this.state
    if (image === sprites.front){
      this.setState({
        image: sprites.back
      })
    }else{
      this.setState({
        image: sprites.front
      })
    }
  }

  handleDelete = () => {
    let pokemonId = this.props.pokemonData.id
    this.props.deletePokemon(pokemonId)
  }

  render() {
    let {name, stats} = this.props.pokemonData
    let hp = stats.find(stat => stat.name === 'hp').value
    // console.log(hp)
    return (
      <Card>
        <div onClick={this.handleToggle}>
          <button id="delete" onClick={this.handleDelete}>x</button>
          <div className="image">
            <img alt="oh no!" src={this.state.image}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
