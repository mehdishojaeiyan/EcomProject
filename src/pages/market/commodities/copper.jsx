import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Copper = () => {
  const [stockData, setStockData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          "https://www.alphavantage.co/query?function=COPPER&interval=monthly&apikey=demo"
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
            <Link to={`/gauge/${stockData.name}`}>Copper</Link>
            <span>{stockData.unit}</span>
            <span>{stockData.data[0].value}</span>
            <span>8,343.84</span>
            <span>8,321.43</span>
            <span>61,780</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Copper;
