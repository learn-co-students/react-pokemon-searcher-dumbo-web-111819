import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = { 
    toggle: false
  }

  handleToggle = () => { 
    // newToggle = !toggle
    this.setState({ 
      toggle: !this.state.toggle
    })
  }
  render() {
    const {name,height,weight,moves,types,stats,sprites} = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" 
             onClick={this.handleToggle} src={this.state.toggle ? sprites.back: sprites.front}/>
          </div>
          <div className="content">
    <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              POKEMON HP HERE hp{stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
