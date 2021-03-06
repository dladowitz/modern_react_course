// import from library 'react', and name it React
// import from library folder
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// need to explicitly define path for our own files due to namespacing contraints
import SearchBar from   './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from   './components/video_list';

//constants
const API_KEY = 'AIzaSyCae9rBWFqOXviUYTU1qB0XHmL1y5NMiMM'

// this is a class, not an instance.
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const debouncedVideoSearch = _.debounce((term)=> {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={debouncedVideoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }  />
      </div>
    );
  }
}

// onSearchTermChange = function(term){
//   this.videoSearch(term)
// }
// function(selectedVideo){
//   this.setState(selectedVideo: selectedVideo)
// }
// create an instance like this:
// <App> </App>
// or self closing
// <App />

// Render JSX component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
