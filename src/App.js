import React, {Component} from 'react';
import './App.less';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./common/Home";
import NoteDetail from "./note/NoteDetail";
import Notes from "./note/Notes";

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/*<BrowserRouter>*/}
        {/*  <Switch>*/}
        {/*    <Route exact path={'/'} component={Home} />*/}
        {/*    <Route exact path={'/notes/:id'} component={NoteDetail} />*/}
        {/*    <Route component={Home} />*/}
        {/*  </Switch>*/}
        {/*</BrowserRouter>*/}

        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route component={Home} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;