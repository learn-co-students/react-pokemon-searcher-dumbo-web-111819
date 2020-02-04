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

  handleSubmit = (evt) => {
      evt.preventDefault()
      this.props.helloFromTheBottom(this.state)
  }
  handleAllChange = (evt) => {
      // console.log(evt)
      let {name, value } = evt.target

      this.setState({
        [name]: value
      })
  }

  render() {

    let {name, hp, frontUrl, backUrl} = this.state


    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input value = {name} onChange ={this.handleAllChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input value = {hp} onChange ={this.handleAllChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input value = {frontUrl}  onChange ={this.handleAllChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input value = {backUrl} onChange ={this.handleAllChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
