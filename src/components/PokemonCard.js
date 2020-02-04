import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    src: true
  }

  // showBackPicture = () => {
  //   this.setState(prevState => {
  //     return {
  //   src: !prevState.src
  //     }
  //   })
  // }

  // showBackPicture = () => {
  //   this.setState({
  //     src: !this.state.src
  //   })
  // }

  showBackPicture = () => {
    let srcTrue = !this.state.src
    this.setState({
      src: srcTrue
    })
  }

  handleDelete = () => {
    this.props.deletePokemon(this.props.pokemon.id)
  }

  render() {

    // console.log(this.props.pokemon)
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.showBackPicture} src={this.state.src ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" />
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
          <button onClick={this.handleDelete}>X</button>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
