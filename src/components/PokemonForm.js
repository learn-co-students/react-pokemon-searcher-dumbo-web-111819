import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (evt) => {
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    let {name, hp, frontUrl, backUrl} = this.state
    fetch(`http://localhost:3000/pokemon`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [{
          value: hp,
          name: "hp"
        }],
        sprites: {
          "front": frontUrl,
          "back": backUrl
        }
      })
    })
    .then(resp => resp.json())
    .then(newPokemon => {
      this.props.addNewPokemon(newPokemon)
    })
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
