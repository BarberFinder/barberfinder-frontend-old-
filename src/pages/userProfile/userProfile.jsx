import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Container,

  } from "semantic-ui-react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Link to="/userprofile">
        <div>
          <Container>
            <div>HALOO</div>
          </Container>
        </div>
      </Link>
    );
  }
}

export default UserProfile;
