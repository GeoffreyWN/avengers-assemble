import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor() {
    super()

    this.state = {
      avengers: [
        {
          name: 'Hulk',
          id: '1'
        },
        {
          name: 'Thor',
          id: '2'
        },
        {
          name: 'Cap',
          id: '3'
        },
        {
          name: 'Iron Man',
          id: '4'},
        {
          name: 'Black Panther',
          id: '5'
        },
        {
          name: 'Ant Man',
          id: '6'
      },
      ]
    }
  }
  render() {
    return (
      <div className="App">
       {this.state.avengers.map((avenger) => <h1 key={avenger.id}> { avenger.name}</h1>  )}
     </div>
    )
  }
}

export default App;
