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

  handleSubmit = event => {
    event.preventDefault()
    let {name, hp, frontUrl, backUrl} = this.state
    // console.log(this.state)
    // console.log(name, hp, frontUrl, backUrl)
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        stats: [{
          value: hp,
          name: 'hp'
        }],
        sprites:{
          front: frontUrl,
          back: backUrl
        }
      }) 
    })
    .then(r=>r.json())
    .then(data=> {
      this.props.addPokemon(data)
      console.log(data)
    })

  }

  handleChange = event => {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
