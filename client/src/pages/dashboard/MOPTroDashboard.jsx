import { useState, useEffect } from "react";
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
  BsGridFill,
  BsPeopleFill,
  BsFolderFill,
  BsPencilFill,
  BsCarFrontFill,
  BsLightningChargeFill,
  BsBarChartFill,
  BsBatteryCharging,
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
            <div className="battery-circle">
              <div className="battery-text">
                <img src={icons.vector} alt="vector" />

               
              

             
                <span className="battery-percentage">{batteryPercentage}%</span>
                <span className="battery-label">Charging</span>
              </div>
            
            </div>

            <div className="battery-time">
              <strong>0h 58 min</strong> Time to full charge
            </div>

            {/* Metrics */}
            <div className="metrics-grid">
              <div className="metric-item">
                <div className="metric-header">
                  <div className="metric-icon rect green">
                  <img src={icons.group} alt="." />
                  </div>
                 
                </div>
                <div className="metric-label">Battery Health</div>
                <div className="metric-value">76%</div>
              </div>

              <div className="metric-item">
                <div className="metric-header">
                  <div className="metric-icon rect purple">
                   <img src={icons.vector1} alt="." />
                  </div>
                </div>
                <div className="metric-label">Consumption</div>
                <div className="metric-value">163W/km</div>
              </div>

              <div className="metric-item">
                <div className="metric-header">
                  <div className="metric-icon rect blue">
                    <BsBarChartFill />
                  </div>
                </div>
                <div className="metric-label">This Week</div>
                <div className="metric-value">1.342km</div>
              </div>

              <div className="metric-item">
                <div className="metric-header">
                  <div className="metric-icon rect blue">
                    <BsCarFrontFill />
                  </div>
                </div>
                <div className="metric-label">Efficiency</div>
                <div className="metric-value">+20</div>
              </div>
            </div>
          </div>

          {/* Utilization Chart Card */}
          <div className="utilization-card">
            <div className="utilization-header">
             
            </div>

            {/* Bar Chart */}
            <div
              style={{
                height: "200px",
                
                display: "flex",
                alignItems: "flex-end",
                gap: "16px",
                padding: "20px 0",
                borderRadius: "15px"
              }}
              className="bar-chart"
            >
              {[65, 85, 55, 90, 75, 95, 80, 70].map((height, index) => (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    height: `${height}%`,
                    background:
                      "linear-gradient(180deg, #ffffffff 0%, #ffffffff 100%)",
                    borderRadius: "8px 8px 0 0",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
             <div className="card-title-section">
                <h3 className="card-main-title">Utilization</h3>
                <p className="card-subtitle">+2 miles from last week</p>
              </div>

            {/* Utilization Stats */}
            <div className="utilization-stats-grid">
              <div className="stat-card">
                <div className="stat-icon green">
                  <img src={icons.valet} alt="." />
                </div>
                <div className="stat-value">$ 32,984</div>
                <div className="stat-label">Estimated Cost</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon green">
                  <img src={icons.rocket} alt="." />
                </div>
                <div className="stat-value">35 Km</div>
                <div className="stat-label">Average Range</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon green">
                  <img src={icons.cart} alt="." />
                </div>
                <div className="stat-value">$ 2,400</div>
                <div className="stat-label">Consumables Cost</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon green">
                  <img src={icons.build} alt="." />
                </div>
                <div className="stat-value">$ 5000</div>
                <div className="stat-label">Maintenance cost</div>
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
                    src="../../assets/Dashboard/SNAIL 1.png"
                    alt="WASP"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div style="font-size: 48px;">🔧</div>';
                    }}
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
                    src="../../assets/Dashboard/SNAIL 1@2x.png"
                    alt="SNAIL"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div style="font-size: 48px;">🏗️</div>';
                    }}
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
                    src="/assets/dashboard/bike.jpg"
                    alt="E-Vehicle"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div style="font-size: 48px;">🏍️</div>';
                    }}
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
