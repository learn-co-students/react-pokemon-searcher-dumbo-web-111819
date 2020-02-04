import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  handleClick=()=>{
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    // debugger
    // console.log(this.props.pokemon);
    let frontImg = this.props.pokemon.sprites.front
    let backImg = this.props.pokemon.sprites.back
    let hp = this.props.pokemon.stats.find(state => state.name === "hp").value
    // console.log(hp);
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.handleClick} src={this.state.clicked ? backImg : frontImg} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
