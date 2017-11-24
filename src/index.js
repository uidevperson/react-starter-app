import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDQ2NhKSi9uA2gCDaeipnCnVb0VLI-1D2I';

YouTubeSearch({key: API_KEY, term: 'ron swanson'}, data => console.log(data));

class App extends Component {
  constructor(props){
    super(props)
    this.state = {videos: []};
    // do initial fetch of data
    YouTubeSearch({key: API_KEY, term: 'ron swanson'}, videos => this.setState({ videos }));
  }

  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
