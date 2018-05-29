import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // inputvalue: '',
      groceryListValue: '',
      todayToDoValue: '',
      longTermValue: '',
      // listOfToDos: [],
      listOfGroceryToDos: [],
      listOfTodayToDos: [],
      listOfLongTermToDos: []
    }
    // this.handleChange = this.handleChange.bind(this);
    this.handleGroceryListChange = this.handleGroceryListChange.bind(this);
    this.handleTodayToDoChange = this.handleTodayToDoChange.bind(this);
    this.handleLongTermChange = this.handleLongTermChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGroceryListSubmit = this.handleGroceryListSubmit.bind(this);
    this.handleTodayToDoSubmit = this.handleTodayToDoSubmit.bind(this);
    this.handleLongTermSubmit = this.handleLongTermSubmit.bind(this);
    // this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleGroceryCheckBoxChange = this.handleGroceryCheckBoxChange.bind(this);
    this.handleTodayToDoCheckBoxChange = this.handleTodayToDoCheckBoxChange.bind(this);
    this.handleLongTermCheckBoxChange = this.handleLongTermCheckBoxChange.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    this.handleGroceryItemDelete = this.handleGroceryItemDelete.bind(this);
    this.handleTodayToDoItemDelete = this.handleTodayToDoItemDelete.bind(this);
    this.handleLongTermItemDelete = this.handleLongTermItemDelete.bind(this);
  }

  handleGroceryListChange(event) {
    this.setState({
      groceryListValue: event.target.value
    })
  }

  handleTodayToDoChange(event) {
    this.setState({
      todayToDoValue: event.target.value
    })
  }

  handleLongTermChange(event) {
    this.setState({
      longTermValue: event.target.value
    })
  }

  handleGroceryListSubmit(event) {
    this.setState({
      listOfGroceryToDos: this.state.listOfGroceryToDos.concat({isCompleted: false, name: this.state.groceryListValue}),
      groceryListValue: ''
    })
    event.preventDefault();
  }

  handleTodayToDoSubmit(event) {
    this.setState({
      listOfTodayToDos: this.state.listOfTodayToDos.concat({isCompleted: false, name: this.state.todayToDoValue}),
      todayToDoValue: ''
    })
    event.preventDefault();
  }

  handleLongTermSubmit(event) {
    this.setState({
      listOfLongTermToDos: this.state.listOfLongTermToDos.concat({isCompleted: false, name: this.state.longTermValue}),
      longTermValue: ''
    })
    event.preventDefault();
  }
  
  handleGroceryCheckBoxChange(event) {
    const groceryIndexLookingFor = parseInt(event.target.name, 10)
    this.setState({
      listOfGroceryToDos: this.state.listOfGroceryToDos.map((groceryItem, index) => {
        if (groceryIndexLookingFor === index) {
          groceryItem.isCompleted=event.target.checked
          return groceryItem
        }
        else {
          return groceryItem
        }
      })
    })
  }

  handleTodayToDoCheckBoxChange(event) {
    const todayToDoIndexLookingFor = parseInt(event.target.name, 10)
    this.setState({
      listOfTodayToDos: this.state.listOfTodayToDos.map((todayToDoItem, index) => {
        if (todayToDoIndexLookingFor === index) {
          todayToDoItem.isCompleted=event.target.checked
          return todayToDoItem
        }
        else {
          return todayToDoItem
        }
      })
    })
  }

  handleLongTermCheckBoxChange(event) {
    const longTermIndexLookingFor = parseInt(event.target.name, 10)
    this.setState({
      listOfLongTermToDos: this.state.listOfLongTermToDos.map((longTermItem, index) => {
        if (longTermIndexLookingFor === index) {
          longTermItem.isCompleted=event.target.checked
          return longTermItem
        }
        else {
          return longTermItem
        }
      })
    })
  }

  handleGroceryItemDelete(event) {
    var groceryItemIndex = parseInt(event.target.name, 10);
    this.setState({
      listOfGroceryToDos: this.state.listOfGroceryToDos.filter((groceryItem, index) => {
        if (groceryItemIndex === index) {
          return false
        }
        else {
          return true
        }
      })
    })
  }

  handleTodayToDoItemDelete(event) {
    var todayToDoItemIndex = parseInt(event.target.name, 10);
    this.setState({
      listOfTodayToDos: this.state.listOfTodayToDos.filter((todayToDoItem, index) => {
        if (todayToDoItemIndex === index) {
          return false
        }
        else {
          return true
        }
      })
    })
  }

  handleLongTermItemDelete(event) {
    var longTermItemIndex = parseInt(event.target.name, 10);
    this.setState({
      listOfLongTermToDos: this.state.listOfLongTermToDos.filter((longTermItem, index) => {
        if (longTermItemIndex === index) {
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

        <div className="To-do-list-headers">
          <h1 className="Grocery-list-header">Grocery List</h1>
          <h1 className="Today-to-dos-header">Today</h1>
          <h1 className="Long-term-to-dos-header">Long Term</h1>
        </div>

        <div className="To-do-list-submit-forms">
          <form className="Grocery-list-form" onSubmit={this.handleGroceryListSubmit}>
            <input
              className="New-grocery-list-item"
              type="text"
              placeholder="New Item"
              value={this.state.groceryListValue}
              onChange={this.handleGroceryListChange}/>
            <input
              className="Submit-button"
              type="submit"
              value="Add"
              onClick={this.handleGroceryListSubmit}/>
          </form>
          <form className="Today-to-dos-form" onSubmit={this.handleTodayToDoSubmit}>
            <input
              className="New-today-to-dos-item"
              type="text"
              placeholder="New Item"
              value={this.state.todayToDoValue}
              onChange={this.handleTodayToDoChange}/>
            <input
              className="Submit-button"
              type="submit"
              value="Add"
              onClick={this.handleTodayToDoSubmit}/>
          </form>
          <form className="Long-term-to-dos-form" onSubmit={this.handleLongTermSubmit}>
            <input
              className="New-long-term-to-dos-item"
              type="text"
              placeholder="New Item"
              value={this.state.longTermValue}
              onChange={this.handleLongTermChange}/>
            <input
              className="Submit-button"
              type="submit"
              value="Add"
              onClick={this.handleLongTermSubmit}/>
          </form>
        </div>

        <div className="To-do-lists">
          <div>
            <ul className="Grocery-list">
              {
                this.state.listOfGroceryToDos.map((groceryItem, index) => {
                  return (
                    <li>
                      <label className="Grocery-list-item">
                        <input
                          className="To-do-check-box"
                          type="checkbox"
                          name={index}
                          onChange={this.handleGroceryCheckBoxChange}/>
                        <div className="Grocery-item-name">
                          {groceryItem.name}
                        </div>
                          <input className="Delete-to-do-item-button"
                            type="submit"
                            value="X"
                            name={index}
                            onClick={this.handleGroceryItemDelete}/>
                      </label>
                  </li>)
                })
              }
            </ul>
          </div>

          <div>
            <ul className="Today-to-do-list">
              {
                this.state.listOfTodayToDos.map((todayToDoItem, index) => {
                  return (
                    <li>
                      <label className="Today-to-do-list-item">
                        <input
                          className="To-do-check-box"
                          type="checkbox"
                          name={index}
                          onChange={this.handleTodayToDoCheckBoxChange}/>
                        <div className="Today-to-do-item-name">
                          {todayToDoItem.name}
                        </div>
                          <input className="Delete-to-do-item-button"
                            type="submit"
                            value="X"
                            name={index}
                            onClick={this.handleTodayToDoItemDelete}/>
                      </label>
                  </li>)
                })
              }
            </ul>
          </div>

          <div>
            <ul className="Long-term-list">
              {
                this.state.listOfLongTermToDos.map((longTermItem, index) => {
                  return (
                    <li>
                      <label className="Long-term-list-item">
                        <input
                          className="To-do-check-box"
                          type="checkbox"
                          name={index}
                          onChange={this.handleLongTermCheckBoxChange}/>
                        <div className="Long-term-item-name">
                          {longTermItem.name}
                        </div>
                          <input className="Delete-to-do-item-button"
                            type="submit"
                            value="X"
                            name={index}
                            onClick={this.handleLongTermItemDelete}/>
                      </label>
                  </li>)
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;