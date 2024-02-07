import React, { useEffect, useState } from "react";
import { alpha, createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { differenceInDays, add } from "date-fns";
import faker from "faker";
import colors from "ansi-colors";
import "./Prtfolio.css";
import { ButtonContent, Button, Icon } from "semantic-ui-react";

const theme = createTheme();

const getRandomDate = () => {
  const startDate = new Date("2023-01-01");
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
  //محاسبه تعداد روزهای بین دو تاریخ
  const daysDifference = differenceInDays(dateClosed, dateOpened);
  const Roll = () => {
    if (daysDifference <= 1) {
      return 0;
    } else {
      let rollResult = daysDifference * 0.01;
      console.log(rollResult);
      console.log(daysDifference);
      return rollResult;
    }
  };
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
    roll: daysDifference <= 1 ? 0 : daysDifference * 0.01,
    profit,
    pipsText,
    total,
  };
};

const rows = Array.from({ length: 100 }, generateRandomData);

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const rowsPerPage = 5;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    // محاسبه تعداد صفحات بر اساس تعداد کل داده‌ها و تعداد سطرهای هر صفحه
    setTotalPages(Math.ceil(rows.length / rowsPerPage));
  }, [rows, rowsPerPage]);

  return (
    <div className="bigBox p-4">
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
                    <TableCell>ROLL</TableCell>
                    <TableCell>Profit </TableCell>
                    <TableCell>Total </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentRows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {row.name}
                        <div>
                          {" "}
                          {Math.floor(Math.random() * 2 + 1) === 1 ? (
                            <span style={{ color: "green" }}>buy</span>
                          ) : (
                            <span style={{ color: "red" }}>sell</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>{row.dateOpened.toISOString().slice(0, 10)}</div>
                        <div>{row.dateOpened.toISOString().slice(11, 19)}</div>
                      </TableCell>
                      <TableCell>
                        <div>{row.dateClosed.toISOString().slice(0, 10)}</div>
                        <div>{row.dateClosed.toISOString().slice(11, 19)}</div>
                      </TableCell>
                      <TableCell>{row.stdLots}</TableCell>
                      <TableCell>{row.open}</TableCell>
                      <TableCell>{row.close}</TableCell>
                      <TableCell>{row.high}</TableCell>
                      <TableCell>{row.low}</TableCell>
                      <TableCell>{row.roll}</TableCell>
                      <TableCell
                        style={{ color: row.profit >= 0 ? " #2ce31b" : "red" }}
                      >
                        {`$${row.profit} `}
                        <div>{row.pipsText} pips</div>
                      </TableCell>
                      <TableCell>
                        {`$${row.total} `}
                        <div>{row.pipsText} pips</div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Pagination
              rowsPerPage={rowsPerPage}
              totalPages={totalPages}
              paginate={paginate}
              currentPage={currentPage}
            />
          </Paper>
        </Box>
      </ThemeProvider>
    </div>
  );
};
const Pagination = ({
  rowsPerPage,
  totalRows,
  paginate,
  currentPage,
  totalPages,
}) => {
  const pageNumbers = [];
  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(currentPage + 2, totalPages);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination p-2 mt-2">
        {currentPage > 1 && (
          <li key="previous" onClick={() => paginate(currentPage - 1)}>
            <a className="pageNum" href="#!">
              {" "}
              <Button className="portfolioBtn" animated>
                <ButtonContent  visible>Previous</ButtonContent>
                <ButtonContent hidden>
                  <Icon name="arrow left" />
                </ButtonContent>
              </Button>
            </a>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={number === currentPage ? "active   " : ""}
          >
            <a className="pageNum" onClick={() => paginate(number)} href="#!">
              {number}
            </a>
          </li>
        ))}
        {currentPage < totalPages && (
          <li key="next" onClick={() => paginate(currentPage + 1)}>
            <a className="pageNum" href="#!">
              {" "}
              <Button className="portfolioBtn" animated>
                <ButtonContent visible>Next</ButtonContent>
                <ButtonContent hidden>
                  <Icon name="arrow right" />
                </ButtonContent>
              </Button>
            </a>
          </li>
        )}
      </ul>
      <p className="totalPage">last page : {totalPages}</p>
    </nav>
  );
};
export default Portfolio;
