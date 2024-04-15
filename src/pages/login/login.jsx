import React from "react";
import {
  GridColumn,
  FormInput,
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from "semantic-ui-react";
import "./login.css";
import loginimg from "../../assets/image/login.jpg";

import { useState } from "react";

const Login = () => {
  let [state, setState] = useState({ activeIndex: 0 });

  function handleClick(e, titleProps) {
    const index = titleProps;
    const activeIndex = state;
    const newIndex = activeIndex === index ? -1 : index;

    setState({ activeIndex: newIndex });
  }
  const activeIndex = state;

  return (
    <>
      <div className="biglogin">
        <div>
          <Table stackable>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell textAlign="right">Notes</TableHeaderCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <Accordion>
                  <AccordionTitle
                    active={activeIndex === 0}
                    index={0}
                    onClick={handleClick}
                  >
                    <Icon name="dropdown" />
                    What is a dog?
                  </AccordionTitle>
                  <AccordionContent active={activeIndex === 0}>
                    <p>
                      A dog is a type of domesticated animal. Known for its
                      loyalty and faithfulness, it can be found as a welcome
                      guest in many households across the world.
                    </p>
                  </AccordionContent>
                </Accordion>
              </TableRow>
              <TableRow>
                <TableCell>Jamie</TableCell>
                <TableCell>Approved</TableCell>
                <TableCell textAlign="right">Requires call</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jill</TableCell>
                <TableCell>Denied</TableCell>
                <TableCell textAlign="right">None</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
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
    </>
  );
};

export default Login;
