import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/moptro-dashboard.css";
import { icons } from "../../constants/assets";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import {
  BsBoxArrowInRight,
  BsPersonPlusFill,
  BsBellFill,
  BsGearFill,
  BsSearch,
  BsCarFrontFill,
  BsBarChartFill,
} from "react-icons/bs";

export default function MOPTroDashboard() {
  const navigate = useNavigate();
  const [batteryPercentage, setBatteryPercentage] = useState(68);
  const [settings, setSettings] = useState({
    emailFollow: true,
    emailAnswers: true,
    emailMentions: false,
    newReleases: false,
    productUpdates: true,
    newsletter: true,
    weeklyDigest: true,
  });

  // Battery circle calculation

  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (batteryPercentage / 100) * circumference;

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="moptro-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">MOPTro</div>

        <div className="sidebar-section">
          <div className="sidebar-menu">
            <div className="sidebar-item active">
              <span className="icon-box">
                <img src={icons.home} alt="home" />
              </span>
              <span>Dashboard</span>
            </div>

            <div className="sidebar-item">
              <span className="icon-box">
                <AiOutlineBarChart size={18} color="blue" />
              </span>
              <span>Tables</span>
            </div>
          </div>
        </div>

        {/* ACCOUNT */}
        <div className="sidebar-section">
          <div className="sidebar-section-title">ACCOUNT PAGES</div>

          <div className="sidebar-menu">
            <div className="sidebar-item">
              <span className="icon-box blue">
                <BsPersonFill size={16} />
              </span>
              <span>Profile</span>
            </div>

            <div className="sidebar-item">
              <span className="icon-box dark">
                <BsBoxArrowInRight size={16} color="blue" />
              </span>
              <span>Sign In</span>
            </div>

            <div className="sidebar-item">
              <span className="icon-box dark">
                <BsPersonPlusFill size={16} color="blue" />
              </span>
              <span>Sign Up</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Header */}
        <div className="top-header">
          <div className="breadcrumb">
            Pages / Dashboard / <span>Profile</span>
          </div>
          <div className="header-actions">
            <div className="search-wrapper">
              <BsSearch className="search-icon" />
              <input
                type="text"
                className="search-bar"
                placeholder="Type here..."
              />
            </div>

            <button className="header-user">
              <BsPersonFill size={16} />
              <span>Sign In</span>
            </button>

            <button className="header-icon-btn">
              <BsGearFill size={16} />
            </button>

            <button className="header-icon-btn">
              <BsBellFill size={16} />
            </button>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="user-profile-section">
          <div className="user-info-wrapper">
            <div className="user-avatar-large">
              <img src={icons.profile} alt="User" />
              <span className="status-indicator">
                <img src={icons.icon1} alt="edit" />
              </span>
            </div>

            <div className="user-details">
              <div className="user-name">Mark Johnson</div>
              <div className="user-email">mark@simmmple.com</div>
            </div>
          </div>

          <div className="user-actions">
            <button className="btn-overview">
              <img src={icons.icon4} alt="icon1" />
              OVERVIEW
            </button>

            <button className="btn-secondary">
              <img src={icons.icon3} alt="icon1" />
              TEAMS
            </button>

            <button className="btn-secondary">
              <img src={icons.icon2} alt="icon1" />
              PROJECTS
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          {/* MOPTro Information Card */}
          <div className="moptro-card">
            {/* Title */}
            <div className="card-title-section">
              <h3 className="card-main-title">MOPTro Informations</h3>
              <p className="card-subtitle">
                Hello, Mark Johnson! Your MOPTro is ready.
              </p>
            </div>

            {/* Battery Circle */}
            <div className="battery-circle-container">
              <div className="battery-circle">
                <svg className="battery-svg" viewBox="0 0 140 140">
                  <defs>
                    <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#05CD99" stopOpacity="1" />
                      <stop offset="100%" stopColor="#05CD99" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <circle
                    className="battery-bg"
                    cx="70"
                    cy="70"
                    r="58"
                    strokeWidth="12"
                    stroke="rgba(255,255,255,0.1)"
                    fill="none"
                  />
                  <circle
                    className="battery-progress"
                    cx="70"
                    cy="70"
                    r="58"
                    strokeWidth="12"
                    stroke="url(#batteryGradient)"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 58}`}
                    strokeDashoffset={`${2 * Math.PI * 58 * (1 - batteryPercentage / 100)}`}
                    strokeLinecap="round"
                    transform="rotate(-90 70 70)"
                  />
                </svg>
                <div className="battery-text">
                  <img src={icons.vector} alt="charging" className="battery-icon" />
                  <span className="battery-percentage">{batteryPercentage}%</span>
                  <span className="battery-label">Charging</span>
                </div>
              </div>
              <div className="battery-time">
                <strong>0h 58 min</strong> Time to full charge
              </div>
            </div>

            {/* Metrics */}
            <div className="metrics-grid">
              <div className="metric-item">
                <div className="metric-content">
                  <div className="metric-icon-wrapper">
                    <div className="metric-icon rect green">
                      <img src={icons.group} alt="battery" />
                    </div>
                  </div>
                  <div className="metric-info">
                    <div className="metric-label">Battery Health</div>
                    <div className="metric-value">76%</div>
                  </div>
                </div>
              </div>

              <div className="metric-item">
                <div className="metric-content">
                  <div className="metric-icon-wrapper">
                    <div className="metric-icon rect blue">
                      <BsCarFrontFill />
                    </div>
                  </div>
                  <div className="metric-info">
                    <div className="metric-label">Efficiency</div>
                    <div className="metric-value">+20%</div>
                  </div>
                </div>
              </div>

              <div className="metric-item">
                <div className="metric-content">
                  <div className="metric-icon-wrapper">
                    <div className="metric-icon rect purple">
                      <img src={icons.vector1} alt="consumption" />
                    </div>
                  </div>
                  <div className="metric-info">
                    <div className="metric-label">Consumption</div>
                    <div className="metric-value">163W/km</div>
                  </div>
                </div>
              </div>

              <div className="metric-item">
                <div className="metric-content">
                  <div className="metric-icon-wrapper">
                    <div className="metric-icon rect blue">
                      <BsBarChartFill />
                    </div>
                  </div>
                  <div className="metric-info">
                    <div className="metric-label">This Month</div>
                    <div className="metric-value">1,342km</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Utilization Chart Card */}
          <div className="utilization-card">
            {/* Bar Chart */}
            <div className="bar-chart-wrapper">
              <div className="bar-chart">
                {[65, 45, 30, 50, 90, 75, 95, 85, 60, 40].map((height, index) => (
                  <div
                    key={index}
                    className="bar-item"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className="utilization-title-section">
              <h3 className="card-main-title">Utilization</h3>
              <p className="card-subtitle-green">(+23%) than last week</p>
            </div>

            {/* Utilization Stats */}
            <div className="utilization-stats-grid">
              <div className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon-box blue">
                    <img src={icons.valet} alt="wallet" />
                  </div>
                  <div className="stat-label">Wallet</div>
                </div>
                <div className="stat-value">$ 32,984</div>
              </div>
              <div className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon-box blue">
                    <img src={icons.rocket} alt="range" />
                  </div>
                  <div className="stat-label">Average Range</div>
                </div>
                <div className="stat-value">35 Km</div>
              </div>
              <div className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon-box blue">
                    <img src={icons.cart} alt="consumables" />
                  </div>
                  <div className="stat-label">Consumables Cost</div>
                </div>
                <div className="stat-value">$ 2,400</div>
              </div>
              <div className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon-box blue">
                    <img src={icons.build} alt="maintenance" />
                  </div>
                  <div className="stat-label">Maintenance cost</div>
                </div>
                <div className="stat-value">$ 5000</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="bottom-grid">
          {/* Platform Settings Card */}
          <div className="settings-card">
            <div className="card-title-section">
              <h3 className="card-main-title">Platform Settings</h3>
            </div>

            <div className="settings-section">
              <div className="settings-section-label">ACCOUNT</div>
              <div className="setting-item">
                <span className="setting-label">
                  Email me when someone follow me
                </span>
                <div
                  className={`toggle-switch ${
                    settings.emailFollow ? "active" : ""
                  }`}
                  onClick={() => toggleSetting("emailFollow")}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
              <div className="setting-item">
                <span className="setting-label">
                  Email me when someone answers me
                </span>
                <div
                  className={`toggle-switch ${
                    settings.emailAnswers ? "active" : ""
                  }`}
                  onClick={() => toggleSetting("emailAnswers")}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
              <div className="setting-item">
                <span className="setting-label">
                  Email me when someone mentions me
                </span>
                <div
                  className={`toggle-switch ${
                    settings.emailMentions ? "active" : ""
                  }`}
                  onClick={() => toggleSetting("emailMentions")}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
            </div>

            <div className="settings-section">
              <div className="settings-section-label">APPLICATION</div>
              <div className="setting-item">
                <span className="setting-label">New launches</span>
                <div
                  className={`toggle-switch ${
                    settings.newReleases ? "active" : ""
                  }`}
                  onClick={() => toggleSetting("newReleases")}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
              <div className="setting-item">
                <span className="setting-label">Monthly product updates</span>
                <div
                  className={`toggle-switch ${
                    settings.productUpdates ? "active" : ""
                  }`}
                  onClick={() => toggleSetting("productUpdates")}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
              <div className="setting-item">
                <span className="setting-label">Subscribe to newsletter</span>
                <div
                  className={`toggle-switch ${
                    settings.newsletter ? "active" : ""
                  }`}
                  onClick={() => toggleSetting("newsletter")}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
              <div className="setting-item">
                <span className="setting-label">Receive insite weekly</span>
                <div
                  className={`toggle-switch ${
                    settings.weeklyDigest ? "active" : ""
                  }`}
                  onClick={() => toggleSetting("weeklyDigest")}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Card */}
          <div className="products-card">
            <div className="products-header">
              <div className="card-title-section">
                <h3 className="card-main-title">Products</h3>
                <p className="card-subtitle">Architects design houses</p>
              </div>
            </div>

            <div className="products-grid">
              <div className="product-item">
                <div className="product-image">
                  <img
                    src={icons.wasp}
                    alt="WASP"
                    
                  />
                </div>
                <div className="product-info">
                  <div className="product-category">PROJECT #1</div>
                  <div className="product-name">WASP</div>
                  <div className="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pulvinar
                  </div>
                  <button className="product-btn">Info</button>
                </div>
              </div>

              <div className="product-item">
                <div className="product-image">
                  <img
                    src={icons.snail}
                    alt="wasp"
                   
                  />
                </div>
                <div className="product-info">
                  <div className="product-category">PROJECT #2</div>
                  <div className="product-name">SNAIL</div>
                  <div className="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pulvinar
                  </div>
                  <button className="product-btn">Info</button>
                </div>
              </div>

              <div className="product-item">
                <div className="product-image">
                  <img
                    src={icons.bike}
                    alt="E-Vehicle"
                  
                  />
                </div>
                <div className="product-info">
                  <div className="product-category">PROJECT #3</div>
                  <div className="product-name">B</div>
                  <div className="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pulvinar
                  </div>
                  <button className="product-btn">Info</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="dashboard-footer">
          <div>© 2025, Greendzine Technologies Pvt Ltd</div>
          <div className="footer-links">
            <a href="#" className="footer-link">
              Marketplace
            </a>
            <a href="#" className="footer-link">
              Blog
            </a>
            <a href="#" className="footer-link">
              License
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
