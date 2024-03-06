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
import LSEChart from "./fwbChart";
import FWBChart from "./fwbChart";

const generateRandomNumber = () => {
  const randomNumber = (Math.random() * 2 - 1).toFixed(4);
  return randomNumber;
};

const randomNumber = generateRandomNumber();


const fwbRows =[ 
    {id:1 , name:"DWNI" , current_price:"19.19 ",open:"19.19", bid:"18.97 x 0" ,volume:"101" },
    {id:2 , name:"LHA" , current_price:"7.06 ",open:"7.16", bid:"7.05 x 948200" ,volume:"1,988,916"},
    {id:3 , name:"DPWA" , current_price:"41.80" ,open:"41.80", bid:"41.80 x 6700" ,volume:"418"},
    {id:4 , name:"EOAN" , current_price:"11.74" ,open:"11.86", bid:"11.74 x 130100" ,volume:"976,102"},
    {id:5 , name:"RWE" , current_price:"30.61" ,open:"30.77", bid:"30.61 x 410300" ,volume:"1,585,812"},
    {id:6 , name:"BMW" , current_price:"109.50" ,open:"109.44", bid:"109.48 x 0" ,volume:"207,017"},
    {id:7 , name:"DBK" , current_price:"12.54" ,open:"12.56", bid:"12.55 x 555100" ,volume:"3,859,646"},
    {id:8 , name:"SAP.DE" , current_price:"174.76" ,open:"174.62", bid:"174.72 x 76700" ,volume:"517,765"},
    {id:9 , name:"BAS.DE" , current_price:"46.83" ,open:"47.95", bid:"46.81 x 139300" ,volume:"804,267"},
    {id:10 , name:"ALV.DE" , current_price:"251.60" ,open:"252.00", bid:"251.55 x 214900" ,volume:"213,728"},
    {id:11 , name:"BAYN.DE" , current_price:"28.10" ,open:"28.55", bid:"28.13 x 28400" ,volume:"2,290,094"},
    {id:12 , name:"SIE.DE" , current_price:"181.54" ,open:"180.74", bid:"181.52 x 44200" ,volume:"342,727"},
    {id:13 , name:"VOW3.DE" , current_price:"121.08" ,open:"119.72", bid:"121.04 x 207000" ,volume:"526,948"},
    {id:14 , name:"HEN3.DE" , current_price:"68.00" ,open:"71.28", bid:"67.96 x 43400" ,volume:"1,042,228"},
    {id:15 , name:"DTG.DE" , current_price:"42.99" ,open:"43.81", bid:"42.99 x N/A" ,volume:"1,227,429"},
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

export default function FWB () {

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
                {fwbRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => { console.log(row)
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
                          <Link to={`/gauge?data=${encodeURIComponent(JSON.stringify(row))}`}>{row.name}</Link>
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
                          <FWBChart/>
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
