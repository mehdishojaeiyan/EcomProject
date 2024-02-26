// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Market() {
//   const [exchangeRates, setExchangeRates] = useState({});

//   useEffect(() => {
//     async function fetchExchangeRates() {
//       try {
//         //'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,ripple,dogecoin&vs_currencies=usd'
//         const response = await axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30');
//         setExchangeRates(response.data);
//         console.log(response)
//       } catch (error) {
//         console.error('Error fetching exchange rates:', error);
//       }
//     }

//     fetchExchangeRates();
//   }, []);

//   return (
//     <div>
//       <h2>All Exchange Rates</h2>
//       <ul>
//         {Object.keys(exchangeRates).map(currency => (
//           <li key={currency}>{currency}: {exchangeRates[currency].usd}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Market;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./market.css"
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );
// const apiUrl = 'https://min-api.cryptocompare.com/data/v2/histoday';
// const currency = 'BTC'; // مثال: بیت‌کوین
// const baseCurrency = 'USD'; // مثال: دلار آمریکا
// const limit = 5; // تعداد روزهای مورد نظر

// const Market = () => {
//   const [historicalData, setHistoricalData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(`${apiUrl}?fsym=${currency}&tsym=${baseCurrency}&limit=${limit}`);
//         setHistoricalData(response.data.Data.Data);
//         console.log(response)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//     fetchData();
//   }, []);

//   const labels = historicalData.map(entry => entry.time);
//   const prices = historicalData.map(entry => entry.close);

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Price',
//         data: prices,
//         fill: true,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1
//       }
//     ]
//   };

//   return (
//     <div className='s'>
//       <h2>Currency Price Chart</h2>
//       <Line data={data} />
//     </div>
//   );
// };

// export default Market;

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// const apiUrl = 'https://min-api.cryptocompare.com/data/v2/histoday';
// const currency = 'BTC'; // مثال: بیت‌کوین
// const baseCurrency = 'USD'; // مثال: دلار آمریکا
// const limit = 30; // تعداد روزهای مورد نظر

// const Market = () => {
//   const [historicalData, setHistoricalData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(`${apiUrl}?fsym=${currency}&tsym=${baseCurrency}&limit=${limit}`);
//         setHistoricalData(response.data.Data.Data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//     fetchData();
//   }, []);

//   const canvasRef = useRef(null);

//   useEffect(() => {
//     if (historicalData.length > 0) {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');

//       const labels = historicalData.map(entry => entry.time);
//       const prices = historicalData.map(entry => entry.close);

//       const minX = Math.min(...labels);
//       const maxX = Math.max(...labels);
//       const minY = Math.min(...prices);
//       const maxY = Math.max(...prices);

//       const scale = 0.9;
//       const margin = 30;
//       const plotWidth = canvas.width - 2 * margin;
//       const plotHeight = canvas.height - 2 * margin;

//       const xScale = plotWidth / (maxX - minX);
//       const yScale = plotHeight / (maxY - minY);

//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.beginPath();
//       ctx.moveTo(margin + (labels[0] - minX) * xScale, canvas.height - margin - (prices[0] - minY) * yScale);

//       for (let i = 1; i < labels.length; i++) {
//         ctx.lineTo(margin + (labels[i] - minX) * xScale, canvas.height - margin - (prices[i] - minY) * yScale);
//       }

//       ctx.strokeStyle = 'rgb(75, 192, 192)';
//       ctx.stroke();
//     }
//   }, [historicalData]);

//   return (
//     <div className='s'>
//       <h2>Currency Price Chart</h2>
//       <canvas ref={canvasRef} width={800} height={400}></canvas>
//     </div>
//   );
// };

// export default Market;

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// const apiUrl = 'https://min-api.cryptocompare.com/data/v2/histoday';
// const currencies = ['BTC', 'ETH', 'LTC']; // لیست ارزها
// const baseCurrency = 'USD'; // مثال: دلار آمریکا
// const limit = 30; // تعداد روزهای مورد نظر

// const Market = () => {
//   const [historicalData, setHistoricalData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const allData = await Promise.all(
//           currencies.map(async (currency) => {
//             const response = await axios.get(`${apiUrl}?fsym=${currency}&tsym=${baseCurrency}&limit=${limit}`);
//             return { currency, data: response.data.Data.Data };
//           })
//         );
//         setHistoricalData(allData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//     fetchData();
//   }, []);

//   console.log(historicalData)
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     if (historicalData.length > 0) {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');

//       const labels = historicalData.map(entry => entry.time);
//       const prices = historicalData.map(entry => entry.close);

//       const minX = Math.min(...labels);
//       const maxX = Math.max(...labels);
//       const minY = Math.min(...prices);
//       const maxY = Math.max(...prices);

//       const scale = 0.9;
//       const margin = 30;
//       const plotWidth = canvas.width - 2 * margin;
//       const plotHeight = canvas.height - 2 * margin;

//       const xScale = plotWidth / (maxX - minX);
//       const yScale = plotHeight / (maxY - minY);

//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.beginPath();
//       ctx.moveTo(margin + (labels[0] - minX) * xScale, canvas.height - margin - (prices[0] - minY) * yScale);

//       for (let i = 1; i < labels.length; i++) {
//         ctx.lineTo(margin + (labels[i] - minX) * xScale, canvas.height - margin - (prices[i] - minY) * yScale);
//       }

//       ctx.strokeStyle = 'rgb(75, 192, 192)';
//       ctx.stroke();
//     }
//   }, [historicalData]);
//   return (
//     <div>
//       {historicalData.map((item, index) => (
//         <div key={index} className="s">
//           <h2>{item.currency} Price Chart</h2>
//           <canvas ref={canvasRef} width={800} height={400}></canvas>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Market;

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// const apiUrl = 'https://min-api.cryptocompare.com/data/v2/histoday';
// const currencies = ['BTC', 'ETH', 'LTC' ,'SOL']; // لیست ارزها
// const baseCurrency = 'USD'; // مثال: دلار آمریکا
// const limit = 30; // تعداد روزهای مورد نظر

// const Market = () => {
//   const [historicalData, setHistoricalData] = useState([]);
//   const canvasRefs = useRef([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const allData = await Promise.all(
//           currencies.map(async (currency, index) => {
//             const response = await axios.get(`${apiUrl}?fsym=${currency}&tsym=${baseCurrency}&limit=${limit}`);
//            console.log(response)
//             return { currency, data: response.data.Data.Data, index };
//           })
//         );
//         setHistoricalData(allData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (historicalData.length > 0) {
//       historicalData.forEach(item => {
//         const canvas = canvasRefs.current[item.index];
//         const ctx = canvas.getContext('2d');

//         const labels = item.data.map(entry => entry.time);
//         const prices = item.data.map(entry => entry.close);

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
//         ctx.moveTo(margin + (labels[0] - minX) * xScale, canvas.height - margin - (prices[0] - minY) * yScale);

//         for (let i = 1; i < labels.length; i++) {
//           ctx.lineTo(margin + (labels[i] - minX) * xScale, canvas.height - margin - (prices[i] - minY) * yScale);
//         }

//         ctx.strokeStyle = 'rgb(75, 192, 192)';
//         ctx.stroke();
//       });
//     }
//   }, [historicalData]);

//   return (
//     <div>
//       {historicalData.map((item, index) => (
//         <div key={index} className="s">
//           <h2>{item.currency} Price Chart</h2>
//           <canvas ref={el => canvasRefs.current[item.index] = el} width={800} height={400}></canvas>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Market;

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import './market.css'

// const apiUrl = 'https://min-api.cryptocompare.com/data/v2/histoday';
// const currentPriceUrl = 'https://min-api.cryptocompare.com/data/price';
// const currencies = ['BTC', 'ETH', 'LTC', 'SOL','USDT']; // لیست ارزها
// const baseCurrency = 'USD'; // مثال: دلار آمریکا
// const limit = 30; // تعداد روزهای مورد نظر

// const Market = () => {
//   const [historicalData, setHistoricalData] = useState([]);
//   const [currentPrices, setCurrentPrices] = useState({});
//   const canvasRefs = useRef([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const allData = await Promise.all(
//           currencies.map(async (currency, index) => {
//             const response = await axios.get(`${apiUrl}?fsym=${currency}&tsym=${baseCurrency}&limit=${limit}`);
//             return { currency, data: response.data.Data.Data, index };
//           })
//         );
//         setHistoricalData(allData);
//       } catch (error) {
//         console.error('Error fetching historical data:', error);
//       }
//     }

//     async function fetchCurrentPrices() {
//       try {
//         const allPrices = await Promise.all(
//           currencies.map(async (currency) => {
//             const response = await axios.get(`${currentPriceUrl}?fsym=${currency}&tsyms=${baseCurrency}`);
//             return { currency, price: response.data[baseCurrency] };
//           })
//         );
//         const prices = {};
//         allPrices.forEach(item => prices[item.currency] = item.price);
//         setCurrentPrices(prices);
//       } catch (error) {
//         console.error('Error fetching current prices:', error);
//       }
//     }

//     fetchData();
//     fetchCurrentPrices();
//   }, []);

//   useEffect(() => {
//     if (historicalData.length > 0) {
//       historicalData.forEach(item => {
//         const canvas = canvasRefs.current[item.index];
//         const ctx = canvas.getContext('2d');

//         const labels = item.data.map(entry => entry.time);
//         const prices = item.data.map(entry => entry.close);

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
//         ctx.moveTo(margin + (labels[0] - minX) * xScale, canvas.height - margin - (prices[0] - minY) * yScale);

//         for (let i = 1; i < labels.length; i++) {
//           ctx.lineTo(margin + (labels[i] - minX) * xScale, canvas.height - margin - (prices[i] - minY) * yScale);
//         }

//         ctx.strokeStyle = 'rgb(75, 192, 192)';
//         ctx.stroke();
//       });
//     }
//   }, [historicalData]);

//   return (
//     <div className="market">
//       {historicalData.map((item, index) => (
//         <div key={index} >
//           <h2>{item.currency} Price Chart</h2>
//           <p>Current Price: {currentPrices[item.currency]} {baseCurrency}</p>
//           <canvas ref={el => canvasRefs.current[item.index] = el} width={200} height={100}></canvas>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Market;

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import MArketLoading from "./marketLoading";
// import "./market.css";

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
// ]; // لیست ارزها
// const baseCurrency = "USD"; // مثال: دلار آمریکا
// const limit = 30; // تعداد روزهای مورد نظر

// const Market = () => {
//   const [historicalData, setHistoricalData] = useState([]);
//   const [currentPrices, setCurrentPrices] = useState({});
//   const [isLoading, setLoding] = useState(true);
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
//         setLoding(false);
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
//         console.log(canvas)
//         if (canvas) {
//           const ctx = canvas.getContext("2d");

//           const labels = item.data.map((entry) => entry.time);
//           const prices = item.data.map((entry) => entry.close);

//           const minX = Math.min(...labels);
//           const maxX = Math.max(...labels);
//           const minY = Math.min(...prices);
//           const maxY = Math.max(...prices);

//           const margin = 30;
//           const plotWidth = canvas.width - 2 * margin;
//           const plotHeight = canvas.height - 2 * margin;

//           const xScale = plotWidth / (maxX - minX);
//           const yScale = plotHeight / (maxY - minY);

//           ctx.clearRect(0, 0, canvas.width, canvas.height);
//           ctx.beginPath();
//           ctx.moveTo(
//             margin + (labels[0] - minX) * xScale,
//             canvas.height - margin - (prices[0] - minY) * yScale
//           );

//           for (let i = 1; i < labels.length; i++) {
//             ctx.lineTo(
//               margin + (labels[i] - minX) * xScale,
//               canvas.height - margin - (prices[i] - minY) * yScale
//             );
//           }

//           ctx.strokeStyle = "#f99417";
//           ctx.stroke();
//         }
//       });
//     }
//   }, [historicalData]);

//   const axios = require('axios');

// // تابع برای دریافت اطلاعات ارز با استفاده از CoinGecko API
// async function getCurrencyInfo() {
//     try {
//         const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');
//         const data = response.data;
//         console.log('نام: ', data.name);
//         console.log('نماد: ', data.symbol);
//         console.log('قیمت فعلی (دلار): ', data.market_data.current_price.usd);
//         console.log('قیمت فعلی (یورو): ', data.market_data.current_price.eur);
//         console.log('قیمت فعلی (تومان): ', data.market_data.current_price.iran_toman);
//         // دیگر اطلاعات مورد نیاز خود را نیز می‌توانید در اینجا نمایش دهید
//     } catch (error) {
//         console.error('خطا در دریافت اطلاعات: ', error);
//     }
// }

// // فراخوانی تابع برای دریافت اطلاعات ارز
// getCurrencyInfo();

//   return (
//     <>
//       <div className="market p-5">
//         <h2 style={{ fontSize: "3em" }}>Price</h2>
//         <div className="digiCoinPrice p-3">
//           {isLoading ? (
//             <MArketLoading />
//           ) : (
//             historicalData.length > 0 &&
//             historicalData.map((item, index) => (
//               <div className="digiCoin p-3" key={index}>
//                 <h2>{item.currency}</h2>
//                 <p>
//                   Current Price: {currentPrices[item.currency]} {baseCurrency}
//                 </p>
//                 <canvas
//                   style={{
//                     width: "100%",
//                     backgroundColor: "#f5f5f5",
//                     borderRadius: "30px",
//                   }}
//                   ref={(el) => (canvasRefs.current[item.index] = el)}
//                   width={200}
//                   height={100}
//                 ></canvas>
//               </div>
//             ))
//           )}
//           <p className="lead">
//             <a href="digiCoin">viwe all</a>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Market;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';

// const CurrencyChart = () => {
//     const [currencyData, setCurrencyData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchCurrencyData = async () => {
//             try {
//                 const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
//                     params: {
//                         vs_currency: 'usd',
//                         days: 30
//                     }
//                 });
//                 setCurrencyData(response.data.prices);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('خطا در دریافت اطلاعات: ', error);
//             }
//         };

//         fetchCurrencyData();
//     }, []);

//     const chartData = {
//         labels: currencyData.map(data => new Date(data[0]).toLocaleDateString()),
//         datasets: [
//             {
//                 label: 'قیمت (دلار)',
//                 data: currencyData.map(data => data[1]),
//                 borderColor: 'blue',
//                 fill: false
//             }
//         ]
//     };

//     const options = {
//         plugins: {
//             legend: {
//                 display: false // خط محور x را پنهان کنید
//             },
//             tooltip: {
//                 mode: 'index',
//                 intersect: false
//             }
//         }
//     };
    

//     return (
//         <div>
//             {loading ? (
//                 <p>در حال دریافت اطلاعات...</p>
//             ) : (
//                 <Line data={chartData} options={options} />
//             )}
//         </div>
//     );
// };

// export default CurrencyChart;



// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// const Market = () => {
//     const [marketData, setMarketData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const fetchMarketData = async () => {
//             try {
//                 const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
//                     params: {
//                         vs_currency: 'usd', // ارزش کنونی مقایسه برای قیمت‌ها
//                         per_page: 10,  // تعداد ارزهای بازگشتی در هر صفحه
//                         page: 1 // شماره صفحه
//                     }
//                 });
//                 setMarketData(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('خطا در دریافت اطلاعات: ', error);
//             }
//         };

//         fetchMarketData();
//     }, []);

//     useEffect(() => {
//         if (!loading) {
//             drawChart();
//         }
//     }, [loading]);

//     const drawChart = () => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');

//         // Clear previous drawings
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         // Draw price changes
//         const priceData = marketData.map(currency => currency.current_price);
//         const maxPrice = Math.max(...priceData);
//         const minPrice = Math.min(...priceData);
//         const priceRange = maxPrice - minPrice;

//         ctx.beginPath();
//         ctx.strokeStyle = 'blue';
//         for (let i = 0; i < marketData.length; i++) {
//             const x = (i / (marketData.length - 1)) * canvas.width;
//             const y = canvas.height - ((marketData[i].current_price - minPrice) / priceRange) * canvas.height;
//             if (i === 0) {
//                 ctx.moveTo(x, y);
//             } else {
//                 ctx.lineTo(x, y);
//             }
//         }
//         ctx.stroke();
//     };

//     return (
//         <div>
//             <h1>Market Information</h1>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <div>
//                     <canvas ref={canvasRef} width={400} height={200}></canvas>
//                     {marketData.map(currency => (
//                         <div key={currency.id}>
//                             <h2>{currency.name} ({currency.symbol.toUpperCase()})</h2>
//                             <p>Current Price (USD): {currency.current_price}</p>
//                             <p>Market Cap (USD): {currency.market_cap}</p>
//                             <p>Total Volume (USD): {currency.total_volume}</p>
//                             {/* Add more details if needed */}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Market;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Market = () => {
    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    params: {
                        vs_currency: 'usd',
                        per_page: 10,
                        page: 1
                    }
                });
                setMarketData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('خطا در دریافت اطلاعات: ', error);
            }
        };

        fetchMarketData();
    }, []);

    return (
        <div>
            <h1>Market Information</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {marketData.map(currency => (
                        <div key={currency.id}>
                            <h2>{currency.name} ({currency.symbol.toUpperCase()})</h2>
                            <p>Current Price (USD): {currency.current_price}</p>
                            <p>Market Cap (USD): {currency.market_cap}</p>
                            <p>Total Volume (USD): {currency.total_volume}</p>
                            <CurrencyChart currencyId={currency.id} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const CurrencyChart = ({ currencyId }) => {
    const [priceData, setPriceData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPriceData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${currencyId}/market_chart`, {
                    params: {
                        vs_currency: 'usd',
                        days: 30
                    }
                });
                setPriceData(response.data.prices);
                setLoading(false);
            } catch (error) {
                console.error('خطا در دریافت اطلاعات: ', error);
            }
        };

        fetchPriceData();
    }, [currencyId]);

    return (
        <div>
            {loading ? (
                <p>Loading chart...</p>
            ) : (
                <canvas ref={canvasRef} width={200} height={100}></canvas>
            )}
        </div>
    );
};

export default Market;
