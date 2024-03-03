import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cotton = () => {
  const [stockData, setStockData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          "https://www.alphavantage.co/query?function=COTTON&interval=monthly&apikey=demo"
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
            }}
          >
            <Link to={`/gauge/${stockData.name}`}>Cotton</Link>
            <span>{stockData.unit}</span>
            <span>{stockData.data[0].value}</span>
            <span>99.50</span>
            <span>95.57</span>
            <span>27,852</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cotton;
