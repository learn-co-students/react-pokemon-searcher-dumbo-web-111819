import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false
  }

  handleFlip = () => {
    let unflipped = !this.state.flipped
      this.setState({
         flipped: unflipped
      })
  }

  render() {
    // console.log(this.props.poke)
    //let {name, sprites, stats} = this.props.poke
     let {name, sprites:{front,back}, stats} = this.props.poke
    // console.log(stats)
    let pokeObj = stats.find( obj => obj.name === 'hp')
// console.log(pokeObj)
    return (
      <Card onClick={this.handleFlip}>
        <div>
          <div className="image">
            <img src={this.state.flipped ? back : front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {/* {stats[5].value} */}
               {pokeObj.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
