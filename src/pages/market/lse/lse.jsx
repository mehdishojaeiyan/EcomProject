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
import LSEChart from "./lseChart";

const generateRandomNumber = () => {
  const randomNumber = (Math.random() * 2 - 1).toFixed(4);
  return randomNumber;
};

const randomNumber = generateRandomNumber();


const lseRows =[ 
    {id:1 , label:"PRU" , price:"108.01 ",open:"108.84", bid:"107.45 x 1000" ,volume:"1,361,470" },
    {id:2 , label:"LLOY" , price:"2.3500 ",open:"2.3500", bid:"0.0000 x 317700" ,volume:"7,839,447"},
    {id:3 , label:"BARC" , price:"8.66" ,open:"8.68", bid:"0.00 x 29200" ,volume:"15,269,996"},
    {id:4 , label:"BHP" , price:"58.34" ,open:"57.86", bid:"57.92 x 800" ,volume:"2,713,772"},
    {id:5 , label:"RIO" , price:"65.14" ,open:"64.60", bid:"64.56 x 1000" ,volume:"2,482,476"},
    {id:6 , label:"VOD" , price:"9.08" ,open:"8.95", bid:"0.00 x 29200" ,volume:"9,214,295"},
    {id:7 , label:"BATS" , price:"2,300.50" ,open:"2,326.50", bid:"2,300.00 x 0" ,volume:"1,187,666"},
    {id:8 , label:"ULVR" , price:"3,863.00" ,open:"3,879.00", bid:"3,862.00 x 0" ,volume:"541,848"},
    {id:9 , label:"DGE" , price:"2,933.50" ,open:"2,950.00", bid:"2,932.00 x 0" ,volume:"497,399"},
    {id:10 , label:"AZN" , price:"64.60" ,open:"64.34", bid:"0.00 x 800" ,volume:"3,966,502"},
    {id:11 , label:"GSK" , price:"42.03" ,open:"42.01", bid:"42.13 x 3200" ,volume:"2,324,675"},
    {id:12 , label:"BP" , price:"35.64" ,open:"35.43", bid:"0.00 x 4000" ,volume:"7,269,386"},
    {id:13 , label:"HSBA" , price:"606.30" ,open:"609.10", bid:"606.20 x 0" ,volume:"11,284,930"},
    {id:14 , label:"LGEN" , price:"241.71" ,open:"242.30", bid:"241.60 x 0" ,volume:"2,958,137"},
    {id:15 , label:"GLEN" , price:"380.65" ,open:"381.15", bid:"380.90 x 0" ,volume:"3,938,558"},
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

export default function LSE () {

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
                {lseRows
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
                          <LSEChart/>
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
