import React, { Component } from "react";
import { ButtonGroup, Button } from 'semantic-ui-react'
import { Line } from "react-chartjs-2";
import {
  Chart,
  PointElement,
  LineController,
  LineElement,
  Filler,Legend
} from "chart.js";

Chart.register(PointElement, LineController, LineElement, Filler ,Legend);

class GaugeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Random Data",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(18,173,4,0.5)", // تغییر رنگ ناحیه زیر نمودار
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#363062",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
          },
        ],
      },
    };
  }

  componentDidMount() {
    this.generateDataForLastMonth();
  }

  generateData = (days, interval, minDifference, maxDifference) => {
    const labels = [];
    let lastValue = 0; // Initialize last value to 0
    const dataPoints = [];
    const currentDate = new Date();
    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );

    // Generate random data for the specified number of days
    for (let i = 0; i < days; i++) {
      const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
      labels.push(date.toLocaleDateString());

      // Generate random value for each interval
      if (i % interval === 0) {
        const randomDifference =
          Math.random() * (maxDifference - minDifference) + minDifference;
        let randomValue = lastValue + randomDifference; // Add random difference to last value
        randomValue = Math.max(2000, randomValue); // Ensure that the value is at least 2000
        dataPoints.push(randomValue); // Add value to dataPoints
        lastValue = randomValue; // Update last value
      } else {
        // Use the previous data point to keep the chart continuous
        dataPoints.push(dataPoints[dataPoints.length - 1]);
      }
    }

    this.setState({
      chartData: {
        ...this.state.chartData,
        labels: labels.reverse(),
        datasets: [
          {
            ...this.state.chartData.datasets[0],
            data: dataPoints.reverse(),
          },
        ],
      },
    });
  };

  generateDataForLastMonth = () => {
    this.generateData(570, 1, -500, 500); // 30 days for last month, with data for each day, and differences between -5000 and 5000
  };

  generateDataForLastThreeMonths = () => {
    this.generateData(990, 2, -500, 500); // 90 days for last three months, with data for every two days, and differences between -5000 and 5000
  };

  generateDataForLastSixMonths = () => {
    this.generateData(1480, 3, -500, 500); // 180 days for last six months, with data for every three days, and differences between -5000 and 5000
  };

  generateDataForLastYear = () => {
    this.generateData(2365, 5, -500, 500); // 365 days for last year, with data for every five days, and differences between -5000 and 5000
  };

  render() {
    return (
      <div>
       
        <Line
          data={this.state.chartData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                display: false, // مخفی کردن مقادیر محور Y
              },
            },
            plugins: {
              title: {
                display: true,
                text: "Time Series Chart",
              },legend: {
                display: true,
                position: 'bottom', // نمایش لیبل در پایین نمودار
            },
            },
            
          }}
        />
        <ButtonGroup size='mini' floated='left'>
        <Button onClick={this.generateDataForLastMonth}>1 m</Button>
        <Button onClick={this.generateDataForLastThreeMonths}>3 m</Button>
        <Button onClick={this.generateDataForLastSixMonths}>6 m</Button>
        <Button onClick={this.generateDataForLastYear}>1 Y</Button>
      </ButtonGroup>
        
      </div>
    );
  }
}

export default GaugeChart;
