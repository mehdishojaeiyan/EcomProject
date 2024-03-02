import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockData = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          'https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=MSFT,AAPL,GOOGL&apikey=YOUR_API_KEY'
        );
        setStockData(response.data['Stock Quotes']);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
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
          <h2>Stock Data</h2>
          {stockData.map(stock => (
            <div key={stock['1. symbol']}>
              <h3>{stock['1. symbol']}</h3>
              <p>Price: {stock['2. price']}</p>
              <p>Volume: {stock['3. volume']}</p>
              <p>Timestamp: {stock['4. timestamp']}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StockData;
