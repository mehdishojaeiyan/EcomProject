// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import MArketLoading from './marketLoading';
// import "./market.css"

// const Market = () => {
//     const [marketData, setMarketData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchMarketData = async () => {
//             try {
//                 const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
//                     params: {
//                         vs_currency: 'usd',
//                         per_page: 8,
//                         page: 1
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

//     return (
//         <div className='market'>
//             <h1>Market Information</h1>
//             {loading ? (
//                 <MArketLoading/>
//             ) : (
//                 <div className='digiCoinPrice p-5'>
//                     {marketData.map(currency => (
//                         <div className='digiCoin p-3' key={currency.id}>
//                             <h2>{currency.name} ({currency.symbol.toUpperCase()})</h2>
//                             <p>Current Price (USD): {currency.current_price}</p>
//                             <p>Market Cap (USD): {currency.market_cap}</p>
//                             <p>Total Volume (USD): {currency.total_volume}</p>
//                             <CurrencyChart currencyId={currency.id} />
//                         </div>
//                     ))}
//                     <p><a href='digiCoin'>View All</a></p>
//                 </div>
//             )}
//         </div>
//     );
// };

// const CurrencyChart = ({ currencyId }) => {
//     const [priceData, setPriceData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const fetchPriceData = async () => {
//             try {
//                 const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${currencyId}/market_chart`, {
//                     params: {
//                         vs_currency: 'usd',
//                         days: 10
//                     }
//                 });
//                 setPriceData(response.data.prices);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('خطا در دریافت اطلاعات: ', error);
//             }
//         };

//         fetchPriceData();
//     }, [currencyId]);

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

//            // Draw price line
//            ctx.beginPath();
//            ctx.strokeStyle = 'blue';
//            ctx.lineWidth = 2;
//            for (let i = 0; i < priceData.length; i++) {
//                const x = 10 + (i / (priceData.length - 1)) * (canvas.width - 20);
//                const y = canvas.height - 10 - (priceData[i][1] / 100) * (canvas.height - 20);
//                if (i === 0) {
//                    ctx.moveTo(x, y);
//                } else {
//                    ctx.lineTo(x, y);
//                }
//            }
//            ctx.stroke();
//     };

//     return (
//         <div>
//             {loading ? (
//                 <p>Loading chart...</p>
//             ) : (
//                 <canvas style={{
//                     width: "100%",
//                     backgroundColor: "#f5f5f5",
//                     borderRadius: "30px",
//                   }} ref={canvasRef} width={200} height={100}></canvas>
//             )}
//         </div>
//     );
// };

// export default Market;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import MArketLoading from "./marketLoading";
import "./market.css";
import Forex from "./forex";
import fxLogo from "../../assets/image/FX_logo.png"
import cryptoLogo from '../../assets/image/cryptoLogo.png'

const Market = () => {
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
              per_page: 10,
              page: 1,
            },
          }
        );
        setMarketData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("خطا در دریافت اطلاعات: ", error);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div className="market p-4">
      <h1 style={{fontSize:"4em"}}>Crypto</h1>
      <div className="mt-5 p-4 whatIsCrypto">
        <div className="whatIsCryptoChild1">
          <p className="h1 p-3">What is cryptocurrency?</p>
          <img src={cryptoLogo} alt="" />
        </div>
        <div className="whatIsCryptoChild2"><p className="h2 p-5">Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.
</p></div>
      </div>
      {loading ? (
        <MArketLoading />
      ) : (
        <>
          <div className="cryptoMarket  p-5">
            <div className="digiCoinPrice">
              {marketData.map((currency) => (
                <div className="digiCoin p-3" key={currency.id}>
                  <h2>
                    {currency.name} ({currency.symbol.toUpperCase()})
                  </h2>
                  <p>Current Price (USD):</p>
                  <p className="h2"> {currency.current_price}</p>
                </div>
              ))}
            </div>
            <p className="p-3 mt-3 lead">
            <a href="digiCoin">View All</a>
            </p>
          </div>
        </>
      )}
      <div className="mt-5 p-4 whatIsForex">
        <div className="whatIsForexChild1">
          <p className="h1 p-3">What is Forex Trading?</p>
          <img src={fxLogo} alt="" />
        </div>
        <div className="whatIsForexChild2"><p className="h2 p-5">Forex (FX) market is a global electronic network for currency trading. It has no central physical location, yet the forex market is the largest, most liquid market in the world by trading volume, with trillions of dollars changing hands every day. Most of the trading is done through banks, brokers, and financial institutions.</p></div>
      </div>
      <Forex />
      <p className="p-3 mt-3 lead">
            <a href="forexExchengeRates">View All</a>
            </p>
    </div>
  );
};

export default Market;
