import React, {Component} from 'react';
import './App.less';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./home/Home";
import NoteDetail from "./note/NoteDetail";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/notes/:id'} component={NoteDetail} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;