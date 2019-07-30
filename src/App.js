import React, {Component} from 'react';
import './App.less';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./home/Home";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Route exact path={'/'} component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;