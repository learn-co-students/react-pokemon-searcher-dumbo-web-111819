import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state ={
    pokemon: [],
    searchTerm:"",
    isChecked: false

  }


  componentDidMount = () => {
    fetch('http://localhost:3000/pokemon')
    .then( r => r.json())
    .then( pokeData => {
        this.setState({
          pokemon: pokeData
        })
    })
  }

  createPokemon = (pokeObj) =>{
    // console.log(pokeObj)
    const newPokemon = {
        name: pokeObj.name,
        sprites: {
          front: pokeObj.frontUrl,
          back: pokeObj.backUrl
        },
        stats: [{name: 'hp', value: pokeObj.value}]

        
    }

    const newArray = [...this.state.pokemon, newPokemon]

    this.setState({
        pokemon: newArray
    })
  }

   search = (text) =>{
     
      this.setState({
        searchTerm: text
      })
   }


   searchPool = () =>{
      return this.state.pokemon.filter( poke => poke.name.includes(this.state.searchTerm))
   }

   filterCheck = (e) => {
    // console.log(e)
    let notChecked = !this.state.isChecked
    this.setState({
      isChecked: notChecked
    })
   }

   filterPokemon = () =>{
     
     
     let val = this.state.pokemon.filter(poke => {
      let {stats} = poke
       // console.log(stat)
       let stat = stats.find(obj => obj.name === 'hp')
      if (stat.value > 80) return poke
          else
        return;
      })
      return val;
   }

  render() {


    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm filterChecked={this.filterCheck} pokemon={this.state.pokemon} createPokemon={this.createPokemon}/>
        <br />
        <Search searchTerm={this.state.searchTerm} search={this.search}  />  
        {/* onChange={() => console.log('🤔')} */}
        <br />
        <PokemonCollection pokemon={this.state.isChecked ? this.filterPokemon() : this.searchPool()} />
      </Container>
    )
  }
}

export default PokemonPage
