import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Content from './components/Content'
import SuccessHandler from './components/SuccessHandler'



class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component = {Content} />
        <Route path='/success' component = {SuccessHandler} />
      </Switch>
    );
  }
}

export default App;
