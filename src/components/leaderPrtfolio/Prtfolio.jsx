import React from "react";
import { alpha, createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format, add } from "date-fns";
import faker from "faker";
import colors from "ansi-colors";
import './Prtfolio.css'

const theme = createTheme();

const getRandomDate = () => {
  const startDate = new Date("2022-01-01");
  const endDate = new Date();
  return faker.date.between(startDate, endDate);
};

const generateRandomData = () => {
  const getRandomFloat = (min, max, precision) => {
    const factor = 10 ** precision;
    return Math.floor(Math.random() * (max - min + 1) * factor) / factor;
  };

  

  const name = `${faker.finance.currencyCode()}/${faker.finance.currencyCode()}`;
  const dateOpened = getRandomDate();
  const dateClosed = add(dateOpened, { days: faker.datatype.number(30) });
  const stdLots = 0.01;
  const open = getRandomFloat(0.001, 2.0, 5);
  const close = getRandomFloat(0.001, 2.0, 5);
  const high = getRandomFloat(0, 50, 1);
  const low = -getRandomFloat(0, 30, 1);
  const profit = faker.datatype.float({ min: -200, max: 200, precision: 2 });

  const isProfitPositive = profit >= 0;
  const profitColor = isProfitPositive ? colors.green : colors.red;
  const pips = isProfitPositive
    ? faker.datatype.number({ min: 0, max: 200 })
    : -faker.datatype.number({ min: 0, max: 200 });

  const total = getRandomFloat(5000, 10000, 2);

  const pipsText = profitColor(pips);

  return {
    name,
    dateOpened,
    dateClosed,
    stdLots,
    open,
    close,
    high,
    low,
    profit,
    pipsText,
    total,
  };
};

const rows = Array.from({ length: 10 }, generateRandomData);

const Portfolio = () => {
  return (<div className="bigBox p-4">
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Date Opened</TableCell>
                  <TableCell>Date Closed</TableCell>
                  <TableCell>Std Lots</TableCell>
                  <TableCell>Open</TableCell>
                  <TableCell>Close</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>Low</TableCell>
                  <TableCell>Profit </TableCell>
                  <TableCell>Total </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                  <TableCell>
  {row.name}
  <div>buy</div>
</TableCell>
<TableCell>
  {format(row.dateOpened, "yyyy-MM-dd HH:mm:ss")}
</TableCell>
<TableCell>
  {format(row.dateClosed, "yyyy-MM-dd HH:mm:ss")}
</TableCell>
<TableCell>{row.stdLots}</TableCell>
<TableCell>{row.open}</TableCell>
<TableCell>{row.close}</TableCell>
<TableCell>{row.high}</TableCell>
<TableCell>{row.low}</TableCell>
<TableCell style={{ color: row.profit >= 0 ? ' #2ce31b' : 'red' }}>
  {`$${row.profit} `}<div>{row.pipsText} pips</div>
</TableCell>
<TableCell >
  {`$${row.total} `}<div>{row.pipsText} pips</div>
</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </ThemeProvider>
    </div>
  );
};

export default Portfolio;
