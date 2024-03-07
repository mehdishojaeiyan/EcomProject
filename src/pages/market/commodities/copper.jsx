import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CommoditesChart from "./commoditesChart";


const Copper = () => {
  const [stockData, setStockData] = useState({ label: [],
    unit: [],
    price: [],
    open: [],
    bid: [],
    volume: [],});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          "https://www.alphavantage.co/query?function=COPPER&interval=monthly&apikey=demo"
        );
        setStockData({ label: response.data.name,
          unit: response.data.unit,
          price: response.data.data[0].value,
          open: "8,343.84",
          bid:"8,321.43",
          volume: "61,780",});

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p
            className="p-2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7,1fr)",
              alignItems:'center',
              borderBottom: "1px solid #c9c9c9",
              backgroundColor: "#f7f7f7",
            }}
          >
            <Link to={`/stockGauge?data=${encodeURIComponent(
                JSON.stringify(stockData)
              )}`}>Copper</Link>
            <span>{stockData.unit}</span>
            <span>{Number(stockData.price).toFixed(2)}</span>
            <span>{stockData.open}</span>
            <span>{stockData.bid}</span>
            <span>{stockData.volume}</span>
            <span><CommoditesChart/></span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Copper;
