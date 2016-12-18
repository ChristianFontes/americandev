import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from "firebase";

//Import CSS
import '../css/App.css';

//Import Components
import AppBar from '../components/AppBar';
import Table from '../components/Table';
import Snabbt from '../components/snabbt';
import Firebase from '../components/firebase';
import Page from '../components/page';
import Scroll from '../components/Scroll';
import Walkway from '../components/Walkway';

//firebase.initializeApp(Firebase);

class App extends Component {
  render() {
    return (
      <Walkway />
    );
  }
}

export default App;
