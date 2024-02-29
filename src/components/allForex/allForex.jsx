
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './allForex.css'

// const AllForex = () => {
//   const [exchangeRates, setExchangeRates] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       try {
//         const response = await axios.get('https://open.er-api.com/v6/latest/USD');
//         setExchangeRates(response.data.rates);
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
//       <h1 className='mt-4 p-4'>Forex Exchange Rate</h1>

//         <div className='allForex p-5'>
//           {Object.entries(exchangeRates).map(([currency, rate]) => (
//             <div className='allMarketForex p-3' key={currency}>
//               <p>{currency}/USD</p>
//               <p>{rate}</p>
//             </div>
//           ))}
//         </div>

//     </div>
//   );
// };

// export default AllForex;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './allForex.css';

const AllForex = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://open.er-api.com/v6/latest/USD');
        setExchangeRates(response.data.rates);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Split exchange rates into two arrays for two columns
  const exchangeRatesArray = Object.entries(exchangeRates);
  const halfLength = Math.ceil(exchangeRatesArray.length / 2);
  const firstColumn = exchangeRatesArray.slice(0, halfLength);
  const secondColumn = exchangeRatesArray.slice(halfLength);

  return (
    <div>
      <h1 className='mt-4 p-4'>Forex Exchange Rate</h1>

      <div className='allForex p-5'>
        <div className='column p-5'>
          {firstColumn.map(([currency, rate],index) => (
            <div className='allMarketForex p-3' key={currency}>
                
              <span>{index + 1}. {currency}/USD</span>
              <span>{rate}</span>
            </div>
          ))}
        </div>
        <div className='column p-5'>
          {secondColumn.map(([currency, rate],index) => (
            <div className='allMarketForex p-3' key={currency}>
              <span>{index + halfLength + 1}. {currency}/USD</span>
              <span>{rate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllForex;