import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    image: true
  }

  handleToggle = (event) => {
    // let newBoolean = !this.state.image
    this.setState((prevState) => {
      return {image: !prevState.image}
    })
  }

  render() {
    // console.log(this.props.pokemonData)
    let {name, stats, sprites} = this.props.pokemonData
    let hpObj = stats.find((stat) => {
      return stat.name === 'hp'
    })
    // console.log(hpObj)
    return (
      <Card>
        <div onClick={this.handleToggle}>
          <div className="image">
            <img src={this.state.image ? sprites.front : sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpObj.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
