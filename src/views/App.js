import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/App.css';
//Import Components
import AppBar from '../components/AppBar';
import Table from '../components/Table';
import Snabbt from '../components/snabbt';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Snabbt />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;