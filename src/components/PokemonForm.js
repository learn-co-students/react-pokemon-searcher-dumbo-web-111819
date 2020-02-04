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

  handleAllChange = (evt)=> {
    let {value, name} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    //send this.state to parent through cb funtion which is an object
    this.props.addNewPokemon(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleAllChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleAllChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleAllChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleAllChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
