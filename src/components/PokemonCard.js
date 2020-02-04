import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    flipped: false
  }

  handleClick = () => {
    // console.log('u clicked me');
    this.setState(prevState => ({
      flipped: !prevState.flipped
    }))
  }
  
  render() {
    // console.log(this.props.pokemon);
    let {name, stats, sprites } = this.props.pokemon
    let hp = stats[4].value
    let {front, back} = sprites
    return (
      <Card>
        <div onClick={this.handleClick} >
          <div className="image">
            <img src={this.state.flipped ? back : front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
