import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function UtilizationChart({ data }) {
  return (
    <Bar
      data={{
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            label: "Utilization",
            data,
            backgroundColor: "#4caf50",
          },
        ],
      }}
    />
  );
}
