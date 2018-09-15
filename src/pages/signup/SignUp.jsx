import React, { Component } from "react";
import "./signup.css";
import Logofb from "../../assets/facebook-logo.svg";
import Logogoogle from "../../assets/google-logo.svg";
import {
  Segment,
  Button,
  Divider,
  Form,
  Checkbox,
  Container,
  Grid,
  Image,
  Input,
  Header,
  Icon,
  Label
} from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      user: [{}],
      input_username: "",
      input_password: "",
      input_firstname: "",
      input_lastname: "",
      input_email: "",
      input_phone: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addUser = () => {
    let prevUser = this.state.user.slice();
    prevUser.push({
      username: this.state.input_username,
      password: this.state.input_password,
      firstname: this.state.input_firstname,
      lastname: this.state.input_lastname,
      email: this.state.input_email,
      phone: this.state.input_phone
    });
  };

  render() {
    return (
      <div>
        <Link to="/signup">
          <Container>
            <Header as="h1" className="headerSignup">
              Sign Up
            </Header>
            <Header as="h3" className="headerSignup2">
              Already have a Wix account?{" "}
              <Link to="/login">
                {" "}
                <a href="#signup">Log In</a>{" "}
              </Link>
            </Header>
            <Grid columns={2} padded>
              <Grid.Column>
                <Form className="form1Signuppage">
                  <Grid columns={2} padded>
                    <Grid.Column className="firstnameSU">
                      <Form.Field>
                        <Input
                          transparent
                          placeholder="First Name"
                          type="text"
                          name="input_firstname"
                          value={this.state.input_firstname}
                          onChange={this.handleOnChange}
                        />
                        <Divider />
                      </Form.Field>
                    </Grid.Column>
                    <Grid.Column className="lastnameSU">
                      <Form.Field>
                        <Input
                          transparent
                          placeholder="Last Name"
                          type="text"
                          name="input_lastname"
                          value={this.state.input_lastname}
                          onChange={this.handleOnChange}
                        />
                        <Divider />
                      </Form.Field>
                    </Grid.Column>
                  </Grid>

                  <Form.Field>
                    <Input
                      transparent
                      placeholder="Username"
                      type="text"
                      name="input_username"
                      value={this.state.input_username}
                      onChange={this.handleOnChange}
                    />
                    <Divider />
                  </Form.Field>

                  <Form.Field>
                    <Input
                      transparent
                      placeholder="Password"
                      type="password"
                      name="input_password"
                      value={this.state.input_password}
                      onChange={this.handleOnChange}
                    />
                    <Divider />
                  </Form.Field>

                  <Form.Field>
                    <Input
                      transparent
                      placeholder="Email"
                      type="email"
                      name="input_email"
                      value={this.state.input_email}
                      onChange={this.handleOnChange}
                    />
                    <Divider />
                  </Form.Field>

                  <Form.Field>
                    <Input
                      transparent
                      placeholder="Phone"
                      type="text"
                      name="input_phone"
                      value={this.state.input_phone}
                      onChange={this.handleOnChange}
                    />
                    <Divider />
                  </Form.Field>
                  <Container textAlign="left">
                    <Button inverted color="blue" className="btonsignup">
                      Sign Up
                    </Button>
                  </Container>
                </Form>
              </Grid.Column>
              <Grid.Column className="gridCol2Signup form2Signuppage">
                <Button as="div" labelPosition="left">
                  <Label as="a" className="logobton" basic>
                    <img src={Logofb} />
                  </Label>
                  <Button icon color="facebook">
                    Continue with Facebook
                  </Button>
                </Button>{" "}
                <br /> <br />
                <Button as="div" labelPosition="left">
                  <Label as="a" className="logobtongoogle" basic>
                    <img src={Logogoogle} />
                  </Label>
                  <Button icon color="blue" className="btonlogogoogle">
                    Continue with Google
                  </Button>
                </Button>
              </Grid.Column>
            </Grid>{" "}
            <br />
            <div className="TermAndUse">
              By signing up, you agree to our Terms of Use and to receive Wix
              emails & updates and acknowledge that you read our Privacy Policy.
            </div>
          </Container>
        </Link>
      </div>
    );
  }
}

export default SignUp;
