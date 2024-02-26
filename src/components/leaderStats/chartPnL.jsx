import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from 'faker';
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' ,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Bar Chart',
    // },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "PnL",
      data: labels.map(() => faker.number.int({ min: 0, max: 10000 })),
      backgroundColor: "rgba(249, 148, 23, 0.8)",
    },
    {
      label: "Unrealised PnL",
      data: labels.map(() => faker.number.int({ min: 0, max: 10000 })),
      backgroundColor: "rgba(54, 48, 98, 0.8)",
    },
  ],
};

export function ChartPnL() {
  return <Bar options={options} data={data} />;
}
