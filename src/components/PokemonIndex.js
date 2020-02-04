import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import Filter from './FilterForm'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemons: [],
    search: "",
    filterHp: false
  }

  componentDidMount (){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemons => {
      this.setState({
        pokemons: pokemons.sort((a,b) => a.name.localeCompare(b.name))
      })
    })
  }

  onChangeSearch = (newValue) => {
    // console.log(newValue)
    this.setState({
      search: newValue
    })
  }

  filterPokemonsHp = (checkedValue) => {
    this.setState({
      filterHp: checkedValue
    })
  }

  updateSearch = () => {
    // console.log(this.state.pokemons)
   let newArr = this.state.pokemons.filter(pokemon => {
    let searchValue = this.state.search.toLowerCase()
     return pokemon.name.toLowerCase().includes(searchValue)
   })

   if(this.state.filterHp === true){
     return newArr.filter(pokemon => pokemon.stats.find(stats => stats.name === 'hp').value >= 90)
   }else{
     return newArr
   }
  }

  createNewPokemon = (newPokemon) => {
    // console.log(newPokemon)

    let newPokemonObj = {
      name: newPokemon.name,
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      },
      stats: [{
        name: 'hp',
        value: newPokemon.hp
      }]
    }
    
     let newArr = [...this.state.pokemons, newPokemonObj]

     this.setState({
       pokemons: newArr
     })
  }

  deletePokemon = (id) => {
    let newArr = this.state.pokemons.filter(pokemon => pokemon.id !== id)

    this.setState({
      pokemons: newArr
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <Filter filterPokemonsHp={this.filterPokemonsHp} filterHp={this.state.filterHp}/>
        <br />
        <PokemonForm createNewPokemon={this.createNewPokemon}/>
        <br />
        <Search onChangeSearch={this.onChangeSearch} search={this.state.search} />
        <br />
        <PokemonCollection pokemons={this.updateSearch()} deletePokemon={this.deletePokemon} />
      </Container>
    )
  }
}

export default PokemonPage
