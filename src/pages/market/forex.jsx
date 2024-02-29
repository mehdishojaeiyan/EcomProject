import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './forex.css'

const Forex = () => {
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

  // Get the entries and select the first 10
  const firstTenEntries = Object.entries(exchangeRates).slice(1, 11);

  return (
    <div>
      <h1 style={{fontSize:"4em"}} className='mt-4 p-4'>Forex</h1>

        <div className='forex p-5'>
          {firstTenEntries.map(([currency, rate]) => (
            <div className='marketForex p-3' key={currency}>
              <p>{currency}/USD</p>
              <p>{rate}</p>
            </div>
          ))}
        </div>

    </div>
  );
};

export default Forex;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ExchangeRates = () => {
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
//       <h1>Forex</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Currency</th>
//             <th>Rate</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(exchangeRates).map(([currency, rate]) => (
//             <tr key={currency}>
//               <td>{currency}</td>
//               <td>{rate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ExchangeRates;