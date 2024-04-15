import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "semantic-ui-react";
import "./pricing.css";
import ServiceCostCalculator from "./calculate";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Your Broker",
  "The number of Leader Strategies you want to CopyTrade per month",
  "Your auto-renewal option for your recurring subscription (1, 3, 6 or 12 months)",
];


const Pricing = () => {

  return (
    <>
      <div className="mainContainer mt-5 p-5">
        <p className="h1 mb-3">Subscription Plan</p>
        <div className="p-5">
          <Table color="orange" celled structured>
            <TableHeader>
              <TableRow active>
                <TableHeaderCell textAlign="center" colSpan="5">
                  <span className="h3">Subscription Plan Table</span>
                </TableHeaderCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell rowSpan="2">
                  Price / Leader Strategy / Month
                </TableHeaderCell>
                <TableHeaderCell textAlign="center">1 Months</TableHeaderCell>
                <TableHeaderCell textAlign="center">3 Months</TableHeaderCell>
                <TableHeaderCell textAlign="center">6 Months</TableHeaderCell>
                <TableHeaderCell textAlign="center">12 Months</TableHeaderCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell textAlign="center">
                  $10 / Leader Strategy / Month
                </TableHeaderCell>
                <TableHeaderCell textAlign="center">
                  $9.5 / Leader Strategy / Month
                </TableHeaderCell>
                <TableHeaderCell textAlign="center">
                  $9 / Leader Strategy / Month
                </TableHeaderCell>
                <TableHeaderCell textAlign="center">
                  $8.3 / Leader Strategy / Month
                </TableHeaderCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>Discount/Month</TableCell>
                <TableCell textAlign="center">-</TableCell>
                <TableCell textAlign="center">Save 5%</TableCell>
                <TableCell textAlign="center">Save 10% </TableCell>
                <TableCell textAlign="center">Save 17%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Copy-Trade Limits</TableCell>
                <TableCell textAlign="center" colSpan="4">
                  You may copy-trade a number of Leaders’ Strategies equal to
                  the available slots provided in your subscription plan.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Leader Strategy changes</TableCell>
                <TableCell colSpan="4" textAlign="center">
                  As many as the plan’s Leader strategy slots
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p className="h1">Learn how much you pay in the Subscription Plan.</p>
          <p className="h2 text-center">It's plain and straightforward. Simply choose</p>
          <div style={{fontSize:'6em'}}>
          <Box sx={{ width: "100%" }}>
      <Stepper activeStep={-2} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box></div>

    
          <ServiceCostCalculator/>
        </div>
      </div>
    </>
  );
};

export default Pricing;
