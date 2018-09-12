import React, { Component } from "react";
import "./login.css";
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

class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/login">
          <Container>
            <Header as="h1" className="headerLogin">
              Log In
            </Header>
            <Header as="h3">New to BarberFinder ? Sign Up</Header>
            <Grid columns={2} padded>
              <Grid.Column>
                <Form>
                  <Form.Field>
                    <Input transparent placeholder="First Name" />
                  </Form.Field>
                  <Divider />
                  <Form.Field>
                    <Input transparent placeholder="Last Name" />
                  </Form.Field>
                  <Divider />
                  <Grid columns={2} padded>
                    <Grid.Column className="rememberMe">
                      <Checkbox label="Remember Me" />
                    </Grid.Column>
                    <Grid.Column>
                      <label>Forgot Password?</label>
                    </Grid.Column>
                  </Grid>
                  <Container textAlign="left">
                    <Button type="submit">Log In</Button>
                  </Container>
                </Form>
              </Grid.Column>
              <Grid.Column className="gridCol2login">
                <Button as="div" labelPosition="left">
                  <Label as="a" basic>
                    <Icon name="facebook" />
                  </Label>
                  <Button icon color="facebook">
                    Continue with Facebook
                  </Button>
                </Button> <br/> <br/>
                <Button as="div" labelPosition="left">
                  <Label as="a" basic>
                    <Icon name="google" />
                  </Label>
                  <Button icon color="blue">
                    Continue with Google
                  </Button>
                </Button>
              </Grid.Column>
            </Grid>
          </Container>
        </Link>
      </div>
    );
  }
}

export default Login;
