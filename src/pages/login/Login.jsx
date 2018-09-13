import React, { Component } from "react";
import "./login.css";
import Logofb from "../../assets/facebook-logo.svg";
import Logogoogle from "../../assets/google-logo.svg"
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
            <Header as="h3" className="headerLogin2">New to BarberFinder ? <Link to="/signup"> <a href='#signup'>Sign Up</a> </Link></Header>
            <Grid columns={2} padded>
              <Grid.Column>
                <Form className="form1loginpage">
                  <Form.Field>
                    <Input transparent placeholder="Email" />
                    <Divider />
                  </Form.Field>

                  <Form.Field>
                    <Input transparent placeholder="Password" />
                    <Divider />
                  </Form.Field>
                  <Grid columns={2} padded>
                    <Grid.Column className="rememberMe">
                      <Checkbox label="Remember Me" />
                    </Grid.Column>
                    <Grid.Column>
                      <label>Forgot Password?</label>
                    </Grid.Column>
                  </Grid> <br/>
                  <Container textAlign="left">
                    <Button inverted color='blue' className="btonlogin">Log In</Button>
                  </Container>
                </Form>
              </Grid.Column>
              <Grid.Column className="gridCol2login form2loginpage">
                <Button as="div" labelPosition="left">
                  <Label as="a"  className="logobton" basic>
                    <img src={Logofb}/>
                  </Label>
                  <Button icon color="facebook">
                    Continue with Facebook
                  </Button>
                </Button>{" "}
                <br /> <br />
                <Button as="div" labelPosition="left">
                  <Label as="a" className="logobtongoogle" basic>
                    <img src={Logogoogle}/>
                  </Label>
                  <Button icon color="blue" className="btonlogogoogle">
                    Continue with Google
                  </Button>
                </Button>
              </Grid.Column>
            </Grid>{" "}
            <br />
            <div className="TermAndUse">
              By logging in, you agree to our Terms of Use and to receive
              BarberFinder emails & updates and acknowledge that you read our
              Privacy Policy.
            </div>
          </Container>
        </Link>
      </div>
    );
  }
}

export default Login;
