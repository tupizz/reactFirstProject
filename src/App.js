import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fff';

let fakeServerData = {
  user: {
    name: 'Tadeu',
    playlists: [
      {
        name: 'My favourites',
        songs: [{name: 'Behing blue eyes', duration: 3561},
                {name: 'SK8 Boy', duration: 208}, 
                {name:'Girlfriend',duration: 255}]
      },
      {
        name: 'My favourites II',
        songs: [{name: 'Passinho do Romano', duration: 3457},
                {name: 'MC Kevinho - A nova loira do tchan', duration: 9874}, 
                {name: 'SK8 Boy', duration: 208},
                {name:'Creu',duration: 1242}]
      },
      {
        name: 'Another Playlist, this is the best',
        songs: [{name: 'TNT', duration: 1345},
                {name: 'Rockstar', duration: 5487}, 
                {name:'The song',duration: 3847}]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return (
     <div style={{width:"20%", display: "inline-block"}}>
        <h2 style={{color: defaultTextColor}}>
          {this.props.playlists.length} playlists
        </h2>
     </div>
    );
  }
}

class PlaylistHours extends Component {
  render() {
    
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    },[]);

    let totalDuration = allSongs.reduce((total, som)=>{
      return total+=som.duration;
    }, 0);

    return (
     <div style={{width:"20%", display: "inline-block"}}>
        <h2 style={{color: defaultTextColor}}>
          {Math.round(totalDuration/60)} horas
        </h2>
     </div>
    );
  }
}

class Filter extends Component {
  render(){
    return (
      <div style={{color: defaultTextColor}}>
        <img />
        <input type="text" />
      </div>
    );
  }
}

class PlaylistComponent extends Component {
 
  render(){
    return(

      <div style={{color: defaultTextColor, display:'inline-block', width: "25%"}}>
        <img />
        <h3>Playlist name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>

      </div>

    );
  }
}

class App extends Component {
    constructor() {
      super();
      this.state = {serverData:{}}
    }
  
  componentDidMount(){
    setTimeout( ()  =>  {
      this.setState({
        serverData: fakeServerData
      });
    }, 1500);
   
  }
  render() {
    let headerStyle={
      'font-size':'30px'
    }

    return (
      <div className="App">
        { this.state.serverData.user ?
          
          <div>
            <h1 style={headerStyle}>{this.state.serverData.user.name}'s Playlist</h1>
            <PlaylistCounter playlists={this.state.serverData.user && this.state.serverData.user.playlists}/>
            <PlaylistHours playlists={this.state.serverData.user && this.state.serverData.user.playlists}/>
            <Filter />            
            <PlaylistComponent />
            <PlaylistComponent />
            <PlaylistComponent />
            <PlaylistComponent />
          </div> : <h1>Loading...</h1>
        }
        
        
      </div>
    );
  }
}

export default App;
