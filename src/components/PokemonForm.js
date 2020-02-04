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

  handleChange = (event) => {
    let {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    this.props.createNewPokemon(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.handleChange} value={this.state.name} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={this.handleChange} value={this.state.hp} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={this.handleChange} value={this.state.frontUrl} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid onChange={this.handleChange} value={this.state.backUrl} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
