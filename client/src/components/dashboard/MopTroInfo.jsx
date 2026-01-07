import TrendChart from "../../charts/TrendChart";
import "../../styles/dashboard.css";


export default function MOPTroInfo() {
  const metrics = [
    {
      id: 1,
      label: "Charge Percentage",
      value: "68%",
      subtext: "40-50 min",
      subLabel: "Time to full charge",
      trend: [30, 45, 35, 55, 48, 68],
      color: "#10b981",
      isPrimary: true,
    },
    {
      id: 2,
      label: "Efficiency",
      value: "76%",
      icon: "⚡",
      change: "+5%",
      trend: [40, 55, 50, 70, 65, 76],
      color: "#4d7cff",
    },
    {
      id: 3,
      label: "Performance",
      value: "+20%",
      icon: "📈",
      change: "+15%",
      trend: [10, 25, 20, 30, 25, 35],
      color: "#10b981",
    },
    {
      id: 4,
      label: "Consumption",
      value: "1633Wh/km",
      icon: "🔋",
      change: "-2%",
      trend: [1700, 1680, 1665, 1650, 1640, 1633],
      color: "#f59e0b",
    },
    {
      id: 5,
      label: "This Month",
      value: "1.342km",
      icon: "📍",
      change: "+12%",
      trend: [1000, 1100, 1200, 1250, 1300, 1342],
      color: "#4d7cff",
    },
  ];

  return (
    <div>
      <div className="card-header">
        <div>
          <h3 className="card-title">MOPTro Informations</h3>
          <p className="card-subtitle">Hello Mark Johnson! Your MOPTro is empty</p>
        </div>
        <button className="card-action">+ ADD MORE</button>
      </div>

      <div className="metrics-grid">
        {metrics.slice(0, 3).map((metric) => (
          <div
            key={metric.id}
            className={`metric-card ${metric.isPrimary ? "primary" : ""}`}
          >
            {metric.icon && (
              <div className="metric-icon">
                <span style={{ fontSize: "20px" }}>{metric.icon}</span>
              </div>
            )}
            <div className="metric-value">{metric.value}</div>
            <div className="metric-label">{metric.label}</div>
            {metric.subtext && (
              <div className="metric-subtext" style={{ fontSize: "14px", marginTop: "8px", color: "rgba(255,255,255,0.7)" }}>
                {metric.subtext}
                <br />
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>
                  {metric.subLabel}
                </span>
              </div>
            )}
            {metric.change && (
              <div className={`metric-change ${metric.change.startsWith('-') ? 'negative' : ''}`}>
                {metric.change}
              </div>
            )}
            {metric.trend && (
              <div className="metric-trend">
                <TrendChart data={metric.trend} color={metric.color} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="metrics-grid" style={{ marginTop: "16px" }}>
        {metrics.slice(3, 5).map((metric) => (
          <div key={metric.id} className="metric-card">
            {metric.icon && (
              <div className="metric-icon">
                <span style={{ fontSize: "20px" }}>{metric.icon}</span>
              </div>
            )}
            <div className="metric-value">{metric.value}</div>
            <div className="metric-label">{metric.label}</div>
            {metric.change && (
              <div className={`metric-change ${metric.change.startsWith('-') ? 'negative' : ''}`}>
                {metric.change}
              </div>
            )}
            {metric.trend && (
              <div className="metric-trend">
                <TrendChart data={metric.trend} color={metric.color} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}