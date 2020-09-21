import React, { Component } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'


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
      ],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({avengers : users}))
    .catch(() => 'Sorry an error occurred while fetching data')
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value}) 
  }

  render() {

    const {avengers, searchField} = this.state;

    const filteredAvengers = avengers.filter(avenger => avenger.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      
        <div className="App">
          <h1>Avengers Assemble</h1>
          {/* <input type="search" placeholder="search avengers" handleChange={(e) => this.setState({ searchField: e.target.value}) }/> */}
          <SearchBox placeholder="search avengers" handleChange={this.handleChange} />
          <CardList avengers={filteredAvengers} />
        </div>
      
    )
  }
}

export default App;
