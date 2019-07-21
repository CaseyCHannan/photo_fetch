import React from 'react'

class SearchBar extends React.Component {
    // state = {term: ''}
    constructor(props) {
        super(props);
    
        this.state = { term: "" };
      }


    // onInputChange(event) {
    //     console.log(event.target.value)
    // }
    //axios
    onFormSubmit(event) {
        event.preventDefault();

        console.log(this.state.term)
    }

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form"> 
                <div className="field">
                    <label>Image Search</label>                    
                    <input 
                    type="text"
                    value={this.state.term}
                    onChange={(e) => this.setState({ term: e.target.value })}/>
                </div>       
            </form>
         </div>
        )
    }
}

export default SearchBar


import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;