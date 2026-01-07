import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDashboardData } from "../../services/dashboardService";
import UtilizationChart from "../../charts/UtilizationChart";
import MOPTroInfo from "../../components/dashboard/MopTroInfo";
import PlatformSettings from "../../components/dashboard/PlatformSettings";
import ProductShowcase from "../../components/dashboard/ProductShowcase";
import "../../styles/dashboard.css";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const res = await fetchDashboardData();
      setData(res.data);
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
      // Use default data if API fails
      setData({
        user: {
          name: "Mark Johnson",
          email: "mark@example.com",
          role: "Customer"
        },
        utilization: [65, 80, 70, 90, 85, 75, 95]
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  };

  if (loading) {
    return (
      <div className="dashboard-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Top Navigation */}
      <div className="dashboard-nav">
        <div className="nav-tabs">
          <div className="nav-tab active">🏠 DASHBOARD</div>
          <div className="nav-tab">📊 PROFILE</div>
          <div className="nav-tab">👤 SIGN-IN</div>
          <div className="nav-tab">📝 SIGN-UP</div>
        </div>
        <div className="nav-actions">
          <button className="nav-btn" onClick={handleLogout}>
            🚪 LOGOUT
          </button>
          <button className="nav-btn secondary">
            ⚙️ SETTINGS
          </button>
        </div>
      </div>

      {/* User Profile Card */}
      <div className="user-profile-card">
        <div className="user-avatar">
          {data?.user?.name?.charAt(0) || "M"}
          <div className="user-status"></div>
        </div>
        <div className="user-info">
          <h2>{data?.user?.name || "Mark Johnson"}</h2>
          <p>{data?.user?.email || "mark.johnson@example.com"} • {data?.user?.role || "Customer"}</p>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="dashboard-grid">
        {/* MOPTro Information Card */}
        <div className="moptro-info-card">
          <MOPTroInfo />
        </div>

        {/* Utilization Chart Card */}
        <div className="utilization-card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Utilization</h3>
              <p className="card-subtitle">Weekly overview</p>
            </div>
          </div>
          <div className="chart-container">
            <UtilizationChart data={data?.utilization} />
          </div>
          <div className="utilization-stats">
            <div className="stat-item">
              <div className="stat-value">$2.364</div>
              <div className="stat-label">Estimated Cost</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">35 Km</div>
              <div className="stat-label">Avg Distance</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">$2.400</div>
              <div className="stat-label">Revenue Target</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">$ 500</div>
              <div className="stat-label">Savings</div>
            </div>
          </div>
        </div>

        {/* Platform Settings Card */}
        <div className="platform-settings-card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Platform Settings</h3>
              <p className="card-subtitle">Manage your preferences</p>
            </div>
          </div>
          <PlatformSettings />
        </div>

        {/* Products Card */}
        <div className="products-card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Products</h3>
              <p className="card-subtitle">Explore our range</p>
            </div>
            <button className="card-action">VIEW ALL</button>
          </div>
          <ProductShowcase />
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        marginTop: '40px', 
        paddingTop: '20px', 
        borderTop: '1px solid var(--border-color)', 
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '12px'
      }}>
        © 2025, Greendzine Technologies Pvt Ltd | <a href="#" style={{ color: 'var(--accent-blue)' }}>Privacy Policy</a> | <a href="#" style={{ color: 'var(--accent-blue)' }}>Terms</a>
      </div>
    </div>
  );
}