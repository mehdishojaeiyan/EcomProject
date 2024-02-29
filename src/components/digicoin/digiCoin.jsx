// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import DigiCoinLoading from "./digiCoinLoading";
// import "./digicoin.css";

// const apiUrl = "https://min-api.cryptocompare.com/data/v2/histoday";
// const currentPriceUrl = "https://min-api.cryptocompare.com/data/price";
// const currencies = [
//   "BTC",
//   "ETH",
//   "LTC",
//   "SOL",
//   "USDT",
//   "XRP",
//   "BNB",
//   "USDC",
//   "FIL",
//   "FDUSD",
//   "WLD",
//   "OP",
//   "MATIC",
//   "ARB",
//   "JASMY",
//   "DOGE",
//   "ALT",
//   "ADA","LINK","AVAX","FET","HBAR","SUI","INJ","STX","SEI","RNDR","MANTLE","MANTA","MASK","DOT","NEAR","APT","GLM","TRX","TIA","CHZ","AI","ETC","ICP","SHIB","BCH","GRT","AGIX","RUNE","JUP","GALA","BLUR","ATOM","DYDX","IMX","APE","DYM","LDO","PYTH","LPT","ENS","RLC","SC","APEX","PEPE","TRB","ONDO","BONK","FTM","ARKM","AR","RONIN","CFX","STORJ","ZETA","UNI","XLM","MINA","EOS","JTO","AAVE","API3","ACH","GMT","SUSHI","OCEAN","CKB","SAND","MEME","WIN","CRV","VET","LUNC","ID","BEAM","ALGO","SSV","WBTC","MAVIA","MAGIC","UMA","AUCTION","SUPER","FLOW"
// ]; // لیست ارزها
// const baseCurrency = "USD"; // مثال: دلار آمریکا
// const limit = 30; // تعداد روزهای مورد نظر

// const DigiCoin = () => {
//   const [historicalData, setHistoricalData] = useState([]);
//   const [currentPrices, setCurrentPrices] = useState({});
//   const[isLoading,setLoding]=useState(true)
//   const canvasRefs = useRef([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const allData = await Promise.all(
//           currencies.map(async (currency, index) => {
//             const response = await axios.get(
//               `${apiUrl}?fsym=${currency}&tsym=${baseCurrency}&limit=${limit}`
//             );
//             console.log("Data received:", response.data);
//             return { currency, data: response.data.Data.Data, index };
//           })
//         );
//         setHistoricalData(allData);
//         setLoding(false)
//       } catch (error) {
//         console.error("Error fetching historical data:", error);
//       }
//     }

//     async function fetchCurrentPrices() {
//       try {
//         const allPrices = await Promise.all(
//           currencies.map(async (currency) => {
//             const response = await axios.get(
//               `${currentPriceUrl}?fsym=${currency}&tsyms=${baseCurrency}`
//             );
//             return { currency, price: response.data[baseCurrency] };
//           })
//         );
//         const prices = {};
//         allPrices.forEach((item) => (prices[item.currency] = item.price));
//         setCurrentPrices(prices);
//       } catch (error) {
//         console.error("Error fetching current prices:", error);
//       }
//     }

//     fetchData();
//     fetchCurrentPrices();
//   }, []);

//   useEffect(() => {
//     if (historicalData.length > 0) {
//       historicalData.forEach((item) => {
//         const canvas = canvasRefs.current[item.index];
//         if (canvas) {
//         const ctx = canvas.getContext("2d");

//         const labels = item.data.map((entry) => entry.time);
//         const prices = item.data.map((entry) => entry.close);

//         const minX = Math.min(...labels);
//         const maxX = Math.max(...labels);
//         const minY = Math.min(...prices);
//         const maxY = Math.max(...prices);

//         const margin = 30;
//         const plotWidth = canvas.width - 2 * margin;
//         const plotHeight = canvas.height - 2 * margin;

//         const xScale = plotWidth / (maxX - minX);
//         const yScale = plotHeight / (maxY - minY);

//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.beginPath();
//         ctx.moveTo(
//           margin + (labels[0] - minX) * xScale,
//           canvas.height - margin - (prices[0] - minY) * yScale
//         );

//         for (let i = 1; i < labels.length; i++) {
//           ctx.lineTo(
//             margin + (labels[i] - minX) * xScale,
//             canvas.height - margin - (prices[i] - minY) * yScale
//           );
//         }

//         ctx.strokeStyle = "#f99417";
//         ctx.stroke();
//         }
//       });
//     }
//   }, [historicalData]);
//   return (
//     <>
//       <div className="p-5">
//         <h2 style={{ fontSize: "3em" }}>Price</h2>
//         <div className="allDigiCoinPrice p-3">
//           {isLoading?(<DigiCoinLoading/>): historicalData.length > 0 && historicalData.map((item, index) => (
//             <div className="allDigiCoin p-3" key={index}>
//               <h2>{item.currency}</h2>
//               <p>
//                 Current Price: {currentPrices[item.currency]} {baseCurrency}
//               </p>
//               <canvas
//                 style={{
//                   width: "100%",
//                   backgroundColor: "#f5f5f5",
//                   borderRadius: "30px",
//                 }}
//                 ref={(el) => (canvasRefs.current[item.index] = el)}
//                 width={200}
//                 height={100}
//               ></canvas>
//             </div>
//           ))}
        
//         </div>
//       </div>
//     </>
//   );
  
// };

// export default DigiCoin;





import React, { useState, useEffect ,useRef} from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DigiCoinLoading from "./digiCoinLoading";
import "./digicoin.css";

const DigiCoin = () => {
    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    params: {
                        vs_currency: 'usd',
                        per_page: 100,
                        page: 1
                    }
                });
                setMarketData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data: ', error);
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
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    return (
        <div className='market p-5'>
            <h1>Market Information</h1>
            {loading ? (
                <DigiCoinLoading/>
            ) : (
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>

                      <StyledTableCell>N.O</StyledTableCell>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell align="right">Symbol</StyledTableCell>
                      <StyledTableCell align="right">Current Price (USD)</StyledTableCell>
                      <StyledTableCell align="right">Market Cap (USD)</StyledTableCell>
                      <StyledTableCell align="right">Total Volume (USD)</StyledTableCell>
                      <StyledTableCell align="right">Chart</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                        {marketData.map((currency ,index) => (
                            <StyledTableRow key={currency.id}>
                                <StyledTableCell component="th" scope="row">{index+1}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{currency.name}</StyledTableCell>
                                <StyledTableCell align="right">{currency.symbol.toUpperCase()}</StyledTableCell>
                                <StyledTableCell align="right">{currency.current_price}</StyledTableCell>
                                <StyledTableCell align="right">{currency.market_cap}</StyledTableCell>
                                <StyledTableCell align="right">{currency.total_volume}</StyledTableCell>
                                <StyledTableCell align="right"><CurrencyChart currencyId={currency.id} /></StyledTableCell>
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
console.log("hjgjhgjh",currencyId)
    useEffect(() => {
        const fetchPriceData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${currencyId}/history`, {
                    params: {
                        vs_currency: 'usd',
                        days: 10
                    }
                    
                });
                // console.log(response)
                setPriceData(response.data.prices);
                setLoading(false);
            } catch (error) {
                console.error('خطا در دریافت اطلاعات: ', error);
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
        const ctx = canvas.getContext('2d');

        // Clear previous drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height);

           // Draw price line
           ctx.beginPath();
           ctx.strokeStyle = 'red';
           ctx.lineWidth = 1;
           for (let i = 0; i < priceData.length; i++) {
               const x = 10 + (i / (priceData.length - 1)) * (canvas.width - 20);
               const y = canvas.height - 10 - (priceData[i][1] / 100) * (canvas.height - 20);
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
                <canvas style={{
                    width: "100%",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "30px",
                  }} ref={canvasRef} width={100} height={30}></canvas>
            )}
        </div>
    );
};
export default DigiCoin;



