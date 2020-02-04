import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons:[],
    search:""
  }
  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(res => {
      this.setState({
        pokemons:res
      })
    })
  }


  handleSearch = (text) => {
   console.log('🤔',text)
   this.setState({
     search:text
   })
  
  }
  mapper= () =>{
    let searchedArray = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
    return searchedArray
  }
  submitHandler = (obj) => {
    let updatedArray = [...this.state.pokemons,obj]
    this.setState({
      pokemons:updatedArray
    })
  }


  render() {
    
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submit = {this.submitHandler} />
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={this.mapper()}/>
      </Container>
    )
  }
}

export default PokemonPage
