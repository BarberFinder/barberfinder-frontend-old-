import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Login from "./Login"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
