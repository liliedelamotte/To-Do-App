import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: '',
      listOfToDos: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // handles keyboard changes in the text field
  handleChange(event) {
    this.setState({
      inputvalue: event.target.value
    })
  }

  // handles the addition of a new item via the "Add" button
  handleSubmit(event) {
    // adds new to-do item to list
    this.setState({
      listOfToDos: this.state.listOfToDos.concat({isCompleted: false, name: this.state.inputvalue}),
      inputvalue: ''
    })
    event.preventDefault();
  }

  // handles the check box change for each to-do item
  handleCheckBoxChange(event) {
    // uses the index to find the object that was checked
    const indexLookingFor = parseInt(event.target.name, 10)
    this.setState({
      listOfToDos: this.state.listOfToDos.map((toDoItem, index) => {
        if (indexLookingFor === index) {
          toDoItem.isCompleted=event.target.checked
          return toDoItem
        }
        else {
          return toDoItem
        }
      })
    })
  }

  // filters out a to-do item from the to-do list when the "X" button is clicked
  handleDelete(event) {
    var itemIndex = parseInt(event.target.name, 10);
    // uses the index to find the object that was checked and filters out items that have been deleted
    this.setState({
      listOfToDos: this.state.listOfToDos.filter((toDoItem, index) => {
        if (itemIndex === index) {
          return false 
        }
        else {
          return true
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do List</h1>
        </header>

        <form className="Submit-form" onSubmit={this.handleSubmit}>
          <input 
            className="New-to-do-item" 
            type="text" 
            placeholder="New To-Do Item" 
            value={this.state.inputvalue} 
            onChange={this.handleChange}/>
          <input 
            className="Submit-button" 
            type="submit" 
            value="Add" 
            onClick={this.handleSubmit}/>
        </form>

        <ul>
          {
            this.state.listOfToDos.map((toDoItem, index) => {
              return (
              <li className="To-do-list">
                <label 
                  className="To-do-list-item">
                  <input
                    className="To-do-check-box"
                    type="checkbox"
                    name={index}
                    onChange={this.handleCheckBoxChange}/>
                  <div className="To-do-item-name">
                    {toDoItem.name}
                  </div>
                    <input className="Delete-to-do-item-button"
                      type="submit"
                      value="X"
                      name={index}
                      onClick={this.handleDelete}/>
                </label>
              </li>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;