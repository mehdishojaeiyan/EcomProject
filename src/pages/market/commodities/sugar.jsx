import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Sugar = () => {
  const [stockData, setStockData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          "https://www.alphavantage.co/query?function=SUGAR&interval=monthly&apikey=demo"
        );
        setStockData(response.data);

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
            className="p-4 "
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6,1fr)",
              borderBottom: "1px solid gray",
              backgroundColor: "lightgray",
            }}
          >
            <Link to={`/gauge/${stockData.name}`}>Sugar</Link>
            <span>{stockData.unit}</span>
            <span>{stockData.data[0].value}</span>
            <span>21.83</span>
            <span>21.03</span>
            <span>80,094</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Sugar;
