import React, { Component } from 'react'
import PersonList from './components/PersonList'

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       people: []
    }
  }
  

  render() {
    return (
      <div>
      <PersonList people={this.state.people} />
      </div>
    )
  }
}

export default App

