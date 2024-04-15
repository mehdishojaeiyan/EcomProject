import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const ExchangeRateChart = () => {
  const [exchangeData, setExchangeData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeData = async () => {
      try {
        const response = await axios.get(
          "https://open.er-api.com/v6/latest/USD"
        );
        setExchangeData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const currencies = Object.keys(exchangeData.rates);
  const charts = currencies.map((currency) => {
    const dataPoints = Object.entries(exchangeData.rates[currency]).map(
      ([date, rate]) => ({
        x: new Date(date),
        y: rate,
      })
    );

    // برای هر ارز، یک نمودار خطی ایجاد کنید
    return (
      <div key={currency}>
        <h3>{currency} Exchange Rate</h3>
        <Line
          data={{
            datasets: [
              {
                label: "Exchange Rate",
                data: dataPoints,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    unit: "day", // می‌توانید واحد زمانی را به تنظیم کنید، مانند روز، هفته، ماه و غیره
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  });

  return (
    <div>
      <h2>Exchange Rate Charts</h2>
      {charts}
    </div>
  );
};

export default ExchangeRateChart;
