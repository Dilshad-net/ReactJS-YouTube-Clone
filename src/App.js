import React from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
//import VideoItem from './components/VideoItem';

import youtube from './api/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount(){
    this.handlerSubmit(' Latest Project ')
  }

  onVideoSelect = ( video ) => {
    this.setState ({ selectedVideo: video });
  }

  handlerSubmit = async ( searchTerm ) => {
    const response = await youtube.get('search', { 
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBZhe3_b1PFUXnWbYx3TpLrl5jMIpt1lpc',
        q: searchTerm,
      }
  });

    //console.log(response.data.items);
    
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  }
  render() {
    const { selectedVideo, videos } = this.state;
    return(
      <Grid justify="center" container spacing={10}>
        <Grid item xs={10}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handlerSubmit} />
            </Grid>
            <Grid item xs={8} style={{height: '666px'}}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;
