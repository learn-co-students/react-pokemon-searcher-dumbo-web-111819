import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    image: this.props.poke.sprites.front
  }

  toggleCard = () => {
    if(this.state.image === this.props.poke.sprites.front){
      this.setState({
        image: this.props.poke.sprites.back
      })
    } else {
      this.setState({
        image: this.props.poke.sprites.front
      })
    }
  }

  render() {
    // console.log(this.props)
    let {name} = this.props.poke
    let hp = this.props.poke.stats.find(s=> s.name === 'hp').value
    return (
      <Card>
        <div onClick={this.toggleCard}>
          <div className="image">
            <img alt="" src={this.state.image} />
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
