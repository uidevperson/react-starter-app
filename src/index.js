import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDQ2NhKSi9uA2gCDaeipnCnVb0VLI-1D2I';

YouTubeSearch({key: API_KEY, term: 'ron swanson'}, data => console.log(data));

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    	videos: [],
    	selectedVideo: null
    };
    this.videoSearch('Ron Swanson');
  }

  videoSearch(term) {
    // do initial fetch of data
    YouTubeSearch({key: API_KEY, term: term}, videos => this.setState({ 
      videos: videos,
      selectedVideo: videos[0] 
    }));
  }

  render(){
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } 
        videos={this.state.videos} 
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
