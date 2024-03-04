import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const generateRandomNumber = () => {
    const randomNumber = (Math.random() * 2 - 1).toFixed(4);
    return randomNumber;
  };

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
    {id:1 , label:"BRK.A" , price:"613,965.00 ",open:"617,727.19", bid:"0.00 x 900" ,volume:"14,548" },
    {id:2 , label:"BA" , price:"200.00 ",open:"204.00", bid:"200.00 x 1000" ,volume:"11,609,465"},
    {id:3 , label:"JPM" , price:"185.29" ,open:"185.70", bid:"0.00 x 900" ,volume:"6,311,996"},
    {id:4 , label:"DIS" , price:"111.95" ,open:"111.44", bid:"0.00 x 900" ,volume:"7,242,396"},
    {id:5 , label:"KO" , price:"59.53" ,open:"59.90", bid:"0.00 x 1800" ,volume:"10,927,564"},
    
];

export default function NyseWtchPP() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Symbol</StyledTableCell>
            <StyledTableCell align="right">Last Price</StyledTableCell>
            <StyledTableCell align="right">Change</StyledTableCell>
            <StyledTableCell align="right">%Change</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
             const randomNumber = generateRandomNumber();
             const israndomNumberPositive = randomNumber >= 0;
             const randomNumberPrecentage = israndomNumberPositive
               ? `+${Math.random().toFixed(2)}`
               : -Math.random().toFixed(2);
          return(
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
              <Link to={`/gauge/${row.label}`}>{row.label}</Link>
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
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
             
            </StyledTableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}