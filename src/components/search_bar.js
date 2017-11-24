import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
  }

	render(){
		return (
        <div>
          <input onChange={ e => this.setState( {term: e.target.value}) } />
          <br />
          Value of the input: {this.state.term}
        </div>
      );
	}
}

export default SearchBar;
