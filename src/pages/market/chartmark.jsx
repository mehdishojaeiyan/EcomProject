// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import { Chart } from 'chart.js/auto';

// const ExchangeRateChart = () => {
//   const [chartData, setChartData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       try {
//         const response = await axios.get('https://open.er-api.com/v6/latest/USD');
//         const rates = response.data.rates;
//         const currencies = Object.keys(rates);
//         const exchangeData = currencies.map(currency => ({
//           currency: currency,
//           rate: rates[currency]
//         }));
        
//         const labels = exchangeData.map(data => data.currency);
//         const dataValues = exchangeData.map(data => data.rate);
        
//         setChartData({
//           labels: labels,
//           datasets: [
//             {
//               label: 'Exchange Rate',
//               data: dataValues,
//               backgroundColor: 'rgba(75,192,192,0.2)',
//               borderColor: 'rgba(75,192,192,1)',
//               borderWidth: 1
//             }
//           ]
//         });
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching exchange rates:', error);
//       }
//     };

//     fetchExchangeRates();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Exchange Rate Chart</h2>
//       <Line
//         data={chartData}
//         options={{
//           scales: {
//             yAxes: [{
//               ticks: {
//                 beginAtZero: true
//               }
//             }]
//           }
//         }}
//       />
//     </div>
//   );
// };

// export default ExchangeRateChart;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

const ExchangeRateChart = () => {
  const [exchangeData, setExchangeData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeData = async () => {
      try {
        const response = await axios.get('https://open.er-api.com/v6/latest/USD');
        setExchangeData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const currencies = Object.keys(exchangeData.rates);
  const charts = currencies.map(currency => {
    const dataPoints = Object.entries(exchangeData.rates[currency]).map(([date, rate]) => ({
      x: new Date(date),
      y: rate
    }));

    // برای هر ارز، یک نمودار خطی ایجاد کنید
    return (
      <div key={currency}>
        <h3>{currency} Exchange Rate</h3>
        <Line
          data={{
            datasets: [{
              label: 'Exchange Rate',
              data: dataPoints,
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1
            }]
          }}
          options={{
            scales: {
              xAxes: [{
                type: 'time',
                time: {
                  unit: 'day' // می‌توانید واحد زمانی را به تنظیم کنید، مانند روز، هفته، ماه و غیره
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
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


