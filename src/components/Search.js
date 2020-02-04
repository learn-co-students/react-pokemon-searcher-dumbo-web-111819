import React from 'react'

class Search extends React.Component {
  
  handleChange = (e) =>{
    this.props.search(e.target.value)
  }

  render(){

    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" value={this.props.searchTerm} onChange={this.handleChange} />
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
