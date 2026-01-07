import { useEffect, useState } from "react";
import { fetchDashboardData } from "../../services/dashboardService";
import UtilizationChart from "../../charts/UtilizationChart";
import "../../styles/dashboard.css";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboardData().then((res) => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Battery: {data.battery}%</p>
      <p>Performance: {data.performance}%</p>
      <p>Distance: {data.distance} km</p>

      <UtilizationChart data={data.utilization} />
    </div>
  );
}
