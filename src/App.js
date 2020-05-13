import React, { Component } from 'react';

import MyNavbar from './Components/MyNavbar';
import MyTodos from './Components/MyTodos';

import './App.scss';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      todos: []
    }
  }

  render(){
    return (
      <div className="App">
        <MyNavbar/>
        <MyTodos/>
      </div>
    );
  }
}

export default App;
