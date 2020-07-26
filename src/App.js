import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Paul", age: "40" },
      { name: "Oleg", age: "47" },
      { name: "Victor", age: "49" },
    ],
    otherState: "some other state",
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Pavel", age: "40" },
        { name: "Olegik", age: "47" },
        { name: "Vitka", age: "49" },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi! I`m React App!</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobby is rock
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
