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
    {id:1 , label:"FERG.L" , price:"17,040.00 " ,open:"19.19", bid:"18.97 x 0" ,volume:"101"},
    {id:2 , label:"EXPN.L" , price:"3,349.00 " ,open:"19.19", bid:"18.97 x 0" ,volume:"101"},
    {id:3 , label:"RR.L" , price:"376.40" ,open:"19.19", bid:"18.97 x 0" ,volume:"101"},
    {id:4 , label:"IAG.L" , price:"142.72" ,open:"19.19", bid:"18.97 x 0" ,volume:"101"},
    {id:5 , label:"ABF.L" , price:"2,250.00" ,open:"19.19", bid:"18.97 x 0" ,volume:"101"},
    
];

export default function LseWtchPP() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
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
              <Link to={`/stockGauge?data=${encodeURIComponent(JSON.stringify(row))}`}>{row.label}</Link>
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