import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NasdaqChart from "./nasdaqChart";

const generateRandomNumber = () => {
  const randomNumber = (Math.random() * 2 - 1).toFixed(4);
  return randomNumber;
};

const randomNumber = generateRandomNumber();


const nasdaqRows =[ 
    {id:1 , label:"AAPL" , price:"179.66 ",open:"179.55", bid:"0.00 x 900" ,volume:"73,563,082" },
    {id:2 , label:"MSFT" , price:"415.50 ",open:"411.27", bid:"0.00 x 1300" ,volume:"17,823,445"},
    {id:3 , label:"AMZN" , price:"178.22" ,open:"176.75", bid:"0.00 x 1000" ,volume:"6,311,996"},
    {id:4 , label:"AVGO" , price:"1,399.17" ,open:"1,325.93", bid:"1,416.00 x 900" ,volume:"4,448,772"},
    {id:5 , label:"CSCO" , price:"48.40" ,open:"48.11", bid:"48.34 x 1800" ,volume:"18,508,070"},
    {id:6 , label:"ADBE" , price:"570.93" ,open:"561.11", bid:"570.00 x 900" ,volume:"2,968,098"},
    {id:7 , label:"PYPL" , price:"60.54" ,open:"60.53", bid:"60.47 x 1200" ,volume:"17,590,442"},
    {id:8 , label:"INTC" , price:"43.82" ,open:"43.41", bid:"44.18 x 1400" ,volume:"41,426,072"},
    {id:9 , label:"NFLX" , price:"619.34" ,open:"599.81", bid:"622.78 x 1300" ,volume:"4,270,305"},
    {id:10 , label:"NVDA" , price:"822.79" ,open:"800.00", bid:"833.00 x 800" ,volume:"47,913,510"},
    {id:11 , label:"TSLA" , price:"202.64" ,open:"200.52", bid:"199.60 x 1400" ,volume:"82,243,119"},
    {id:12 , label:"GOOGL" , price:"137.14" ,open:"138.43", bid:"0.00 x 800" ,volume:"31,151,116"},
    {id:13 , label:"META" , price:"502.30" ,open:"492.11", bid:"504.38 x 1000" ,volume:"15,884,882"},
    {id:14 , label:"ZM" , price:"70.91" ,open:"70.98", bid:"	70.91 x 1000" ,volume:"4,272,703"},
    {id:15 , label:"MRNA" , price:"95.06" ,open:"92.52", bid:"95.06 x 900" ,volume:"3,789,169"},
]

const columns = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "code", label: "Last Price", minWidth: 100 },
  {
    id: "size",
    label: "Open",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Bid",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Change",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "population",
    label: "%Change",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "population",
    label: "Volume",
    minWidth: 130,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "population",
    label: "Day Chart",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function NASDAQ () {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
     
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {nasdaqRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const randomNumber = generateRandomNumber();
                    const israndomNumberPositive = randomNumber >= 0;
                    const randomNumberPrecentage = israndomNumberPositive
                      ? `+${Math.random().toFixed(2)}`
                      : -Math.random().toFixed(2);
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        <TableCell>
                          <Link to={`/gauge/${row.label}`}>{row.label}</Link>
                        </TableCell>
                        <TableCell >{row.price}</TableCell>
                        <TableCell align="right" >{row.open}</TableCell>
                        <TableCell align="right">{row.bid}</TableCell>
                       
                        <TableCell align="right">
                          <span
                            style={{
                              color: randomNumber >= 0 ? "green" : "red",
                            }}
                          >
                            {randomNumber >= 0 ? "+" : "-"}{" "}
                            {Math.abs(randomNumber)}
                          </span>
                        </TableCell>
                        <TableCell align="right">
                          <span
                            style={{
                              color: randomNumber >= 0 ? "green" : "red",
                            }}
                          >
                            {randomNumberPrecentage}
                          </span>
                        </TableCell>
                        <TableCell align="right">{row.volume}</TableCell>
                        <TableCell align="right">
                          <NasdaqChart/>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      
    </>
  );
}
