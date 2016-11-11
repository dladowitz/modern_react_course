// sets const Componenet = React.Componenet
import React, { Component } from 'react';

// Componets can be Functional components or Class components
// Functional  is a simple function that may take imput.
// Class is a traditional oop class. Can have attributes (state) and functions.

// Extend with React base component class
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }


  // Every class based component must have a render function.
  // This is what will automatically be called when imported in to other components.
  render() {
    // must return JSX or will cause error
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

// Sets up the default to export the SearchBar constant or class.
// Could export other componets if specified.
export default SearchBar;
