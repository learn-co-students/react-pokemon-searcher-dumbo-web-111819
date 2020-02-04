import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    src: true
  }

  showBackPicture = () => {
    this.setState({
      src: !this.state.src
    })
  }

  render() {

    // console.log(this.props.pokemon)
    return (
      <Card>
        <div onClick={this.showBackPicture} >
          <div className="image">
            <img src={this.state.src ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stats => stats.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
