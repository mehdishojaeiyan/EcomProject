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
    {id:4 , label:"DIS" , price:"111.95" ,open:"111.44", bid:"0.00 x 900" ,volume:"7,242,396"},
    {id:5 , label:"KO" , price:"59.53" ,open:"59.90", bid:"0.00 x 1800" ,volume:"10,927,564"},
    {id:6 , label:"JNJ" , price:"162.12" ,open:"161.83", bid:"0.00 x 800" ,volume:"5,670,135"},
    {id:7 , label:"V" , price:"283.16" ,open:"283.20", bid:"0.00 x 900" ,volume:"3,955,728"},
    {id:8 , label:"WMT" , price:"58.76" ,open:"58.80", bid:"0.00 x 1200" ,volume:"19,030,919"},
    {id:9 , label:"PG" , price:"158.85" ,open:"158.05", bid:"0.00 x 900" ,volume:"4,819,929"},
    {id:10 , label:"IBM" , price:"188.20" ,open:"185.49", bid:"0.00 x 1200" ,volume:"4,018,354"},
    {id:11 , label:"BAC" , price:"34.35" ,open:"34.53", bid:"0.00 x 3100" ,volume:"38,432,319"},
    {id:12 , label:"XOM" , price:"105.84" ,open:"105.72", bid:"0.00 x 900" ,volume:"18,460,120"},
    {id:13 , label:"CVX" , price:"152.81" ,open:"153.05", bid:"0.00 x 1200" ,volume:"7,459,056"},
    {id:14 , label:"HD" , price:"384.45" ,open:"380.36", bid:"0.00 x 800" ,volume:"2,750,902"},
    {id:15 , label:"MCD" , price:"290.73" ,open:"291.39", bid:"0.00 x 900" ,volume:"3,028,869"},
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
