import React, { Component } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component'


class App extends Component {
  constructor() {
    super()

    this.state = {
      avengers: [
        { name: 'Hulk', id: '1' },
        { name: 'Thor', id: '2' },
        { name: 'Cap',  id: '3' },
        { name: 'Iron Man', id: '4' },
        { name: 'Black Panther', id: '5' },
        { name: 'Ant Man', id: '6' },
      ]
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({avengers : users}))
    .catch(() => 'Sorry an error occurred while fetching data')
  }
  render() {
    return (
      
        <div className="App">
          <CardList avengers={this.state.avengers} />
        </div>
     

      
    )
  }
}

export default App;
