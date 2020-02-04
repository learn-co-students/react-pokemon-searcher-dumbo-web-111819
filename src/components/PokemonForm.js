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
handleChange=(evt) => {
let {name , value} = evt.target
this.setState({
  [name]:value
})
}



  handleSubmit = (evt) => {
    evt.preventDefault()
    let nameValue = evt.target["name"].value
    let hpValue = evt.target["hp"].value
    let frontUrlValue = evt.target["frontUrl"].value
    let backUrlValue = evt.target["backUrl"].value
    let newObj = {name:nameValue,stats:{0:{hp:hpValue}},sprites:{front:frontUrlValue,back:backUrlValue}}
    this.props.submit(newObj)
    // console.log(this.props)
    
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange = {this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange = {this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange = {this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange = {this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
