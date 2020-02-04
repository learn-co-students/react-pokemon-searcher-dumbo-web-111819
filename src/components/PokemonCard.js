import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    isClicked:false
  }
  handleCLick = (evt) => {
    console.log("aaaah")
    if (this.state.isClicked === false){
    this.setState({
      isClicked: true
    })
  }else {
    this.setState({
      isClicked: false
    })
  }
  console.log(this.state.isClicked)
  }
    

  render() {
    // console.log(this.props.pokeObj)
    // let {name,sprites} = this.props.pokeObj
    // let hp =  this.props.pokeObj.stats.find(stats => stats.name === "hp").value
    let hp = this.props.pokeObj.stats[0]
    return (
      <Card>
        <div onClick={this.handleCLick}> 
          <div className="image">
            <img src={this.state.isClicked ? sprites.back : sprites.front} alt={`${name}`} />
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
