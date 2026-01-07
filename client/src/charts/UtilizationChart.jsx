import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function UtilizationChart({ data }) {
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Utilization (%)",
        data: data || [65, 80, 70, 90, 85, 75, 95],
        backgroundColor: "rgba(77, 124, 255, 0.8)",
        borderColor: "#4d7cff",
        borderWidth: 2,
        borderRadius: 8,
        barThickness: 32,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1e2442",
        titleColor: "#fff",
        bodyColor: "#a8b3cf",
        borderColor: "#2d3550",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return context.parsed.y + "%";
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6b7388",
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: "rgba(45, 53, 80, 0.5)",
          drawBorder: false,
        },
        ticks: {
          color: "#6b7388",
          font: {
            size: 12,
          },
          callback: function(value) {
            return value + "%";
          },
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}