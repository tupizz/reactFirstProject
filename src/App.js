import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fff';

class Aggregate extends Component {
  render() {
    return (
     <div style={{width:"20%", display: "inline-block"}}>
       <h2 style={{color: defaultTextColor}}>Number Text</h2>
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
  render() {

    let name = 'Tadeu';
    
    let green='#FF1212';

    let headerStyle={
      color: green,
      'font-size':'30px'
    }

    return (
      <div className="App">
        <h1>Título Página</h1>
        
        <Aggregate />
        <Aggregate />
        <Filter />
        
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
      </div>
    );
  }
}

export default App;
