
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './allForex.css';

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

//   // Split exchange rates into two arrays for two columns
//   const exchangeRatesArray = Object.entries(exchangeRates);
//   const halfLength = Math.ceil(exchangeRatesArray.length / 2);
//   const firstColumn = exchangeRatesArray.slice(1, halfLength);
//   const secondColumn = exchangeRatesArray.slice(halfLength);

//   return (
//     <div>
//       <h1 className='mt-4 p-4'>Forex Exchange Rate</h1>

//       <div className='allForex p-5'>
//         <div className='forexColumn p-5'>
//           {firstColumn.map(([currency, rate],index) => (
//             <div className='allMarketForex p-3' key={currency}>
                
//               <span>{index + 1}. {currency}/USD</span>
//               <span>{rate}</span>
//             </div>
//           ))}
//         </div>
//         <div className='forexColumn p-5'>
//           {secondColumn.map(([currency, rate],index) => (
//             <div className='allMarketForex p-3' key={currency}>
//               <span>{index + halfLength + 1}. {currency}/USD</span>
//               <span>{rate}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllForex;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './allForex.css';

const AllForex = () => {
  const [exchangeRates, setExchangeRates] = useState({
    rates:{},
    names:{}
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://open.er-api.com/v6/latest/USD');
        setExchangeRates((prev) => ({ ...prev, rates: response.data.rates }));
        console.log(response)
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  useEffect(() => {
    const fetchCurrenciesName = async () => {
      try {
        const response = await axios.get('https://openexchangerates.org/api/currencies.json');
        setExchangeRates((prev) => ({ ...prev, names: response.data }));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchCurrenciesName();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Split exchange rates into two arrays for two columns
  const exchangeRatesArray = Object.entries(exchangeRates.rates);
  const halfLength = Math.ceil(exchangeRatesArray.length / 2);
  const firstColumn = exchangeRatesArray.slice(0, halfLength);
  const secondColumn = exchangeRatesArray.slice(halfLength);

  return (
    <div>
      <h1 className='mt-4 p-4'>Forex Exchange Rate</h1>

      <div className='allForex p-5'>
        <div className='forexColumn p-5'>
          {firstColumn.map(([currency, rate], index) => (
            <div className='allMarketForex p-3' key={currency}>
              <span>{index + 1}. {exchangeRates.names[currency]} ({currency})/USD</span>
              <span>{rate}</span>
            </div>
          ))}
        </div>
        <div className='forexColumn p-5'>
          {secondColumn.map(([currency, rate], index) => (
            <div className='allMarketForex p-3' key={currency}>
              <span>{index + halfLength + 1}. {exchangeRates.names[currency]} ({currency})/USD</span>
              <span>{rate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllForex;
