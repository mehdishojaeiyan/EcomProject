import "./home.css"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  
const Home = () => {
    return ( <>
    <div className="homeContainer">

    <div>
    <h2>My Awesome Chart</h2>
    {/* <Line data={data} options={options} /> */}
  </div>
    </div>
    </> );
}
 
export default Home;