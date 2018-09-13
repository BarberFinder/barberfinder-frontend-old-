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
  state = {};
  render() {
    return (
      <div>
        <Link to="/signup">
          <Container>
            <Header as="h1" className="headerLogin">
              Sign Up
            </Header>
            <Header as="h3" className="headerLogin2">
              Already have a Wix account? <Link to="/login"> <a href="#signup">Log In</a> </Link>
            </Header>
            <Grid columns={2} padded>
              <Grid.Column>
                <Form className="form1loginpage">
                  <Form.Field>
                    <Input transparent placeholder="Email" />
                    <Divider />
                  </Form.Field>

                  <Form.Field>
                    <Input transparent placeholder="Type your email again" />
                    <Divider />
                  </Form.Field>

                  <Form.Field>
                    <Input transparent placeholder="Password" />
                    <Divider />
                  </Form.Field>

                  <Form.Field>
                    <Input transparent placeholder="Type your password again" />
                    <Divider />
                  </Form.Field>
                  <Container textAlign="left">
                    <Button inverted color='blue' className="btonsignup">Sign Up</Button>
                  </Container>
                </Form>
              </Grid.Column>
              <Grid.Column className="gridCol2login form2loginpage">
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
