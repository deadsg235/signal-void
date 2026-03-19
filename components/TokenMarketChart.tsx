"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const mockMarketData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "SIGNAL Price (USD)",
      data: [0.0001, 0.00015, 0.0003, 0.00025, 0.0004, 0.00035, 0.0005],
      borderColor: "#00ff88",
      backgroundColor: "rgba(0, 255, 136, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#e0e0e0",
      },
    },
    title: {
      display: true,
      text: "SIGNAL Token Market Data (Mock)",
      color: "#e0e0e0",
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(context.parsed.y);
          }
          return label;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#e0e0e0",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
    },
    y: {
      ticks: {
        color: "#e0e0e0",
        callback: function (value: string | number) {
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(Number(value));
        },
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
};

export default function TokenMarketChart() {
  return (
    <div className="panel p-6">
      <Line data={mockMarketData} options={options} />
    </div>
  );
}
