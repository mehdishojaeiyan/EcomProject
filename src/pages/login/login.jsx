import React from "react";
import {
  GridColumn,
  FormInput,
  Button,
  Divider,
  Form,
  Grid,
  Segment,
} from "semantic-ui-react";
import "./login.css"
import loginimg from "../../assets/image/login.jpg"

const Login = () => (<div className="biglogin">
   <div></div>
  <div className="p-5">
  <Segment>
 
      <GridColumn>
        <Form>
          <FormInput
            icon="user"
            iconPosition="left"
            label="Username"
            placeholder="Username"
          />
          <FormInput
            icon="lock"
            iconPosition="left"
            label="Password"
            type="password"
          />

          <Button content="Login" primary />
        </Form>
      </GridColumn>

      <GridColumn verticalAlign="middle">
        <Button content="Sign up" icon="signup" size="big" />
      </GridColumn>
  
  </Segment>
  </div>
 
  </div>
);

export default Login;
