import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from "firebase";

//Import CSS
import '../css/App.css';

//Import Components
import AppBar from '../components/AppBar';
import Table from '../components/Table';
<<<<<<< HEAD
import Firebase from '../components/firebase';

firebase.initializeApp(Firebase);

var defaultDatabase = firebase.database();
console.log(defaultDatabase);
=======
import Snabbt from '../components/snabbt';
>>>>>>> snabbtJS

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