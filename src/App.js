import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import UserProfile from "./pages/userProfile/userProfile"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/userprofile" component={UserProfile} />
        </div>
      </Router>
    );
  }
}

export default App;
