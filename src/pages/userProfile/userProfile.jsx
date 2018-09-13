import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container,Image } from "semantic-ui-react";


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
            HALOOOOO
            <div>
              <Image
                src="../../assets/image/abc.png"
                size="medium"
              />
            </div>
          </Container>
        </div>
      </Link>
    );
  }
}

export default UserProfile;
