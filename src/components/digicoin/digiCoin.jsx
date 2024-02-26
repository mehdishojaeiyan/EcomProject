import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import DigiCoinLoading from "./digiCoinLoading";
import "./digicoin.css";

const apiUrl = "https://min-api.cryptocompare.com/data/v2/histoday";
const currentPriceUrl = "https://min-api.cryptocompare.com/data/price";
const currencies = [
  "BTC",
  "ETH",
  "LTC",
  "SOL",
  "USDT",
  "XRP",
  "BNB",
  "USDC",
  "FIL",
  "FDUSD",
  "WLD",
  "OP",
  "MATIC",
  "ARB",
  "JASMY",
  "DOGE",
  "ALT",
  "ADA","LINK","AVAX","FET","HBAR","SUI","INJ","STX","SEI","RNDR","MANTLE","MANTA","MASK","DOT","NEAR","APT","GLM","TRX","TIA","CHZ","AI","ETC","ICP","SHIB","BCH","GRT","AGIX","RUNE","JUP","GALA","BLUR","ATOM","DYDX","IMX","APE","DYM","LDO","PYTH","LPT","ENS","RLC","SC","APEX","PEPE","TRB","ONDO","BONK","FTM","ARKM","AR","RONIN","CFX","STORJ","ZETA","UNI","XLM","MINA","EOS","JTO","AAVE","API3","ACH","GMT","SUSHI","OCEAN","CKB","SAND","MEME","WIN","CRV","VET","LUNC","ID","BEAM","ALGO","SSV","WBTC","MAVIA","MAGIC","UMA","AUCTION","SUPER","FLOW"
]; // لیست ارزها
const baseCurrency = "USD"; // مثال: دلار آمریکا
const limit = 30; // تعداد روزهای مورد نظر

const DigiCoin = () => {
  const [historicalData, setHistoricalData] = useState([]);
  const [currentPrices, setCurrentPrices] = useState({});
  const[isLoading,setLoding]=useState(true)
  const canvasRefs = useRef([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const allData = await Promise.all(
          currencies.map(async (currency, index) => {
            const response = await axios.get(
              `${apiUrl}?fsym=${currency}&tsym=${baseCurrency}&limit=${limit}`
            );
            console.log("Data received:", response.data);
            return { currency, data: response.data.Data.Data, index };
          })
        );
        setHistoricalData(allData);
        setLoding(false)
      } catch (error) {
        console.error("Error fetching historical data:", error);
      }
    }

    async function fetchCurrentPrices() {
      try {
        const allPrices = await Promise.all(
          currencies.map(async (currency) => {
            const response = await axios.get(
              `${currentPriceUrl}?fsym=${currency}&tsyms=${baseCurrency}`
            );
            return { currency, price: response.data[baseCurrency] };
          })
        );
        const prices = {};
        allPrices.forEach((item) => (prices[item.currency] = item.price));
        setCurrentPrices(prices);
      } catch (error) {
        console.error("Error fetching current prices:", error);
      }
    }

    fetchData();
    fetchCurrentPrices();
  }, []);

  useEffect(() => {
    if (historicalData.length > 0) {
      historicalData.forEach((item) => {
        const canvas = canvasRefs.current[item.index];
        if (canvas) {
        const ctx = canvas.getContext("2d");

        const labels = item.data.map((entry) => entry.time);
        const prices = item.data.map((entry) => entry.close);

        const minX = Math.min(...labels);
        const maxX = Math.max(...labels);
        const minY = Math.min(...prices);
        const maxY = Math.max(...prices);

        const margin = 30;
        const plotWidth = canvas.width - 2 * margin;
        const plotHeight = canvas.height - 2 * margin;

        const xScale = plotWidth / (maxX - minX);
        const yScale = plotHeight / (maxY - minY);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(
          margin + (labels[0] - minX) * xScale,
          canvas.height - margin - (prices[0] - minY) * yScale
        );

        for (let i = 1; i < labels.length; i++) {
          ctx.lineTo(
            margin + (labels[i] - minX) * xScale,
            canvas.height - margin - (prices[i] - minY) * yScale
          );
        }

        ctx.strokeStyle = "#f99417";
        ctx.stroke();
        }
      });
    }
  }, [historicalData]);
  return (
    <>
      <div className="p-5">
        <h2 style={{ fontSize: "3em" }}>Price</h2>
        <div className="allDigiCoinPrice p-3">
          {isLoading?(<DigiCoinLoading/>): historicalData.length > 0 && historicalData.map((item, index) => (
            <div className="allDigiCoin p-3" key={index}>
              <h2>{item.currency}</h2>
              <p>
                Current Price: {currentPrices[item.currency]} {baseCurrency}
              </p>
              <canvas
                style={{
                  width: "100%",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "30px",
                }}
                ref={(el) => (canvasRefs.current[item.index] = el)}
                width={200}
                height={100}
              ></canvas>
            </div>
          ))}
        
        </div>
      </div>
    </>
  );
  
};

export default DigiCoin;
