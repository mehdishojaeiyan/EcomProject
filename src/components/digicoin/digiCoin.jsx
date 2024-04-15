import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DigiCoinLoading from "./digiCoinLoading";
import "./digicoin.css";

const DigiCoin = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              per_page: 100,
              page: 1,
            },
          }
        );
        setMarketData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchMarketData();
  }, []);

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <div className="market p-5">
      <h1>Market Information</h1>
      {loading ? (
        <DigiCoinLoading />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>N.O</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Symbol</StyledTableCell>
                <StyledTableCell align="right">
                  Current Price (USD)
                </StyledTableCell>
                <StyledTableCell align="right">
                  Market Cap (USD)
                </StyledTableCell>
                <StyledTableCell align="right">
                  Total Volume (USD)
                </StyledTableCell>
                <StyledTableCell align="right">Chart</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {marketData.map((currency, index) => (
                <StyledTableRow key={currency.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {currency.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {currency.symbol.toUpperCase()}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {currency.current_price}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {currency.market_cap}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {currency.total_volume}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <CurrencyChart currencyId={currency.id} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

const CurrencyChart = ({ currencyId }) => {
  const [priceData, setPriceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef(null);
  console.log("hjgjhgjh", currencyId);
  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${currencyId}/history`,
          {
            params: {
              vs_currency: "usd",
              days: 10,
            },
          }
        );
        
        setPriceData(response.data.prices);
        setLoading(false);
      } catch (error) {
        console.error("خطا در دریافت اطلاعات: ", error);
      }
    };

    fetchPriceData();
  }, [currencyId]);

  useEffect(() => {
    if (!loading) {
      drawChart();
    }
  }, [loading]);

  const drawChart = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear previous drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw price line
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    for (let i = 0; i < priceData.length; i++) {
      const x = 10 + (i / (priceData.length - 1)) * (canvas.width - 20);
      const y =
        canvas.height - 10 - (priceData[i][1] / 100) * (canvas.height - 20);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  };

  return (
    <div>
      {loading ? (
        <p>Loading chart...</p>
      ) : (
        <canvas
          style={{
            width: "100%",
            backgroundColor: "#f5f5f5",
            borderRadius: "30px",
          }}
          ref={canvasRef}
          width={100}
          height={30}
        ></canvas>
      )}
    </div>
  );
};
export default DigiCoin;
