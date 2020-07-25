import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import Searchbox from './components/searchbox/searchbox';

class App extends Component {
  constructor(){
    super()
    this.state={
      monsters:[],
      searchField:''
  }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>this.setState({monsters:users}))
  }

  render(){
    const {monsters,searchField}=this.state
    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1 className="h1">Robotish</h1>
     <Searchbox handleChange={e=>this.setState({searchField:e.target.value})} value={searchField}/>
      <CardList monsters={filteredMonsters}/>
   
    </div>
  );
  }
}

export default App;
