import React, { Component } from 'react';

class FilterForm extends Component {

    handleFilterHp = (event) => {

        this.props.filterPokemonsHp(event.target.checked)
    }

    render() {

        return (
            <div>
                <form>
                    <label>High hp Pokemons </label>
                    <input 
                    className="filter-form"
                    type="checkbox"
                    checked={this.props.filterHp}
                    onChange={this.handleFilterHp}
                    />
                </form>
            </div>
        );
    }
}

export default FilterForm;