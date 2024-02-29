// import { useState ,useEffect } from "react";
// import axios from "axios";

// const Test = ()=>{

// const [forex,setForex]=useState({})
// const [forexLoading,setForexLoading]=useState(true)

// useEffect(()=>{
//     const fetchforex= async ()=>{
//        try {
//         const response = await axios.get('https://openexchangerates.org/api/latest.json?31bc30b27f22449ab12574eb4c06f6dd');
//         setForex(response.data)
//         setForexLoading(false)
//         console.log(response)
//        } catch (error) {
//         console.error("fetcchforex has error:" ,error)
//        }
//     }
//     fetchforex()
// },[]);

// return(<><div>
// { forexLoading ?(<p>loading...</p>):(
//  <div>
//     {forex.map(curency=>{
//         <div> {curency.data}</div>
//     })}
//  </div>   
// )}</div>
// </>);
// };
// export default Test;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    const fetchExchangeRates = async () => {
        try {
            const apiKey = '31bc30b27f22449ab12574eb4c06f6dd';
            const response = await axios.get(
              `https://open.exchangerates.org/v1/time-series.json?start_date=2024-02-20&end_date=2024-02-27&base=USD&symbols=EUR,GBP,CAD,AUD&app_id=${apiKey}`
            );
            setExchangeRates(response.data.rates);
          } catch (error) {
            console.error('Error fetching exchange rates:', error);
          }
    };

    fetchExchangeRates();
  }, []);

  return (
    <div>
      <h2>Exchange Rates for the Past Week</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>EUR</th>
            <th>GBP</th>
            <th>CAD</th>
            <th>AUD</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(exchangeRates).map(date => (
            <tr key={date}>
              <td>{date}</td>
              <td>{exchangeRates[date].EUR}</td>
              <td>{exchangeRates[date].GBP}</td>
              <td>{exchangeRates[date].CAD}</td>
              <td>{exchangeRates[date].AUD}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
