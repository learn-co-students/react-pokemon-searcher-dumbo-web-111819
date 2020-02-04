import React from 'react'

const Search = props => {

  // console.log(props)

  const handleChange = (event) => {
    props.onChangeSearch(event.target.value)
  }

  return (

    <div className="ui search">
      <div className="ui icon input">
        <input 
        className="prompt"
        placeholder="search..."
        name="search"
        value={props.search}
        onChange={handleChange}
        />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
