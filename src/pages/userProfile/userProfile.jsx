import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Container,
  Image,
  Grid,
  List,
  Icon,
  Divider,
  Header,
  Button,
  Menu,
  Segment
} from "semantic-ui-react";
import abc from "../../assets/image/abc.png";
import "./userProfile.css";
import "../../App.css";
import userProfileDetail from "./userProfileDetail";
import UserProfileHistory from "./UserProfileHistory";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "profile"
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    console.log("");
    return (
      <div>
        <Container className="containerprofile">
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image src={abc} className="gridavatar" />
                <br/>
                <input className="getfoto" type="file" />
              </Grid.Column>
              <Grid.Column width={12}>
                <div className="grid2coluserprofile divleftuserprofile">
                  <Header as="h2" className="left">
                    Muhammad Noor Cahyo
                    <Divider />
                  </Header>
                  <div>
                    <Menu pointing secondary>
                      <Link to={`${this.props.match.url}`}>
                        <Menu.Item
                          className="menuprofile"
                          name="profile"
                          active={activeItem === "profile"}
                          onClick={this.handleItemClick}
                        />{" "}
                        <br />
                        <Route
                          exact
                          path={`${this.props.match.url}`}
                          component={userProfileDetail}
                        />
                          <Route
                          path={`${this.props.match.url}/history`}
                          component={UserProfileHistory}
                        />
                      </Link>
                      <Link to={`${this.props.match.url}/history`}>
                        <Menu.Item
                          className="menuprofile"
                          name="reservation history"
                          active={activeItem === "reservation history"}
                          onClick={this.handleItemClick}
                        />{" "}
                        <br />
                      </Link>
                      
                    </Menu>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default UserProfile;
