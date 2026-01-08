import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/moptro-dashboard.css';

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
    weeklyDigest: true
  });

  // Battery circle calculation
  const circumference = 2 * Math.PI * 58; // radius = 58
  const progress = circumference - (batteryPercentage / 100) * circumference;

  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="moptro-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">MOPTro</div>
        
        <div className="sidebar-section">
          <div className="sidebar-menu">
            <div className="sidebar-item active">
              <span className="sidebar-icon">🏠</span>
              <span>Dashboard</span>
            </div>
            <div className="sidebar-item">
              <span className="sidebar-icon">📊</span>
              <span>Status</span>
            </div>
          </div>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-section-title">ACCOUNT PAGES</div>
          <div className="sidebar-menu">
            <div className="sidebar-item">
              <span className="sidebar-icon">👤</span>
              <span>Profile</span>
            </div>
            <div className="sidebar-item" onClick={() => navigate('/')}>
              <span className="sidebar-icon">🔑</span>
              <span>Sign In</span>
            </div>
            <div className="sidebar-item" onClick={() => navigate('/signup')}>
              <span className="sidebar-icon">📝</span>
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
            <input 
              type="text" 
              className="search-bar" 
              placeholder="Type here..."
            />
            <button className="header-icon-btn" onClick={handleLogout}>
              👤
            </button>
            <button className="header-icon-btn">
              🔔
            </button>
            <button className="header-icon-btn">
              ⚙️
            </button>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="user-profile-section">
          <div className="user-info-wrapper">
            <div className="user-avatar-large">
              M
              <div className="status-indicator"></div>
            </div>
            <div className="user-details">
              <div className="user-name">Mark Johnson</div>
              <div className="user-email">mark@example.com</div>
            </div>
          </div>
          <div className="user-actions">
            <button className="btn-overview">OVERVIEW</button>
            <button className="btn-teams">TEAMS</button>
            <button className="btn-projects">PROJECTS</button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          {/* MOPTro Information Card */}
          <div className="moptro-card">
            <div className="card-title-section">
              <h3 className="card-main-title">MOPTro Informations</h3>
              <p className="card-subtitle">Hello, Mark Johnson! Your MOPTro is ready.</p>
            </div>

            {/* Battery Circle */}
            <div className="battery-circle">
              <svg width="140" height="140" className="battery-svg">
                <defs>
                  <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#00D9A5', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0075FF', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle
                  cx="70"
                  cy="70"
                  r="58"
                  className="battery-bg"
                />
                <circle
                  cx="70"
                  cy="70"
                  r="58"
                  className="battery-progress"
                  strokeDasharray={circumference}
                  strokeDashoffset={progress}
                />
              </svg>
              <div className="battery-text">
                <span className="battery-percentage">{batteryPercentage}%</span>
                <span className="battery-label">Charging</span>
              </div>
            </div>

            <div className="battery-time">
              <strong>0h 58 min</strong> Time to full charge
            </div>

            {/* Metrics Grid */}
            <div className="metrics-grid">
              <div className="metric-item">
                <div className="metric-header">
                  <div className="metric-icon blue">🚗</div>
                  <div className="metric-change">+ 20%</div>
                </div>
                <div className="metric-label">Efficiency</div>
                <div className="metric-value">76%</div>
                <div className="metric-chart">
                  <svg width="100%" height="40" style={{ display: 'block' }}>
                    <path 
                      d="M 0 30 Q 20 15, 40 20 T 80 15 T 120 25" 
                      fill="none" 
                      stroke="url(#blueGradient)" 
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#0075FF', stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: '#00C9FF', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="metric-item">
                <div className="metric-header">
                  <div className="metric-icon purple">⚡</div>
                  <div className="metric-change">+ 20%</div>
                </div>
                <div className="metric-label">Consumption</div>
                <div className="metric-value">163W/km</div>
                <div className="metric-chart">
                  <svg width="100%" height="40" style={{ display: 'block' }}>
                    <path 
                      d="M 0 25 Q 20 10, 40 15 T 80 20 T 120 10" 
                      fill="none" 
                      stroke="url(#purpleGradient)" 
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="metric-item">
                <div className="metric-header">
                  <div className="metric-icon blue">📍</div>
                  <div className="metric-change">+ 20%</div>
                </div>
                <div className="metric-label">This Week</div>
                <div className="metric-value">1.342km</div>
                <div className="metric-chart">
                  <svg width="100%" height="40" style={{ display: 'block' }}>
                    <path 
                      d="M 0 20 Q 20 25, 40 15 T 80 25 T 120 15" 
                      fill="none" 
                      stroke="url(#blueGradient2)" 
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient id="blueGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#0075FF', stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: '#00C9FF', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="metric-item" style={{ gridColumn: 'span 2' }}>
                <div className="metric-label">This Month</div>
                <div className="metric-value">5.234km</div>
              </div>
            </div>
          </div>

          {/* Utilization Chart Card */}
          <div className="utilization-card">
            <div className="utilization-header">
              <div className="card-title-section">
                <h3 className="card-main-title">Utilization</h3>
                <p className="card-subtitle">+2 miles from last week</p>
              </div>
            </div>
            
            {/* Bar Chart */}
            <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '16px', padding: '20px 0' }}>
              {[65, 85, 55, 90, 75, 95, 80, 70].map((height, index) => (
                <div 
                  key={index}
                  style={{
                    flex: 1,
                    height: `${height}%`,
                    background: 'linear-gradient(180deg, #00C9FF 0%, #0075FF 100%)',
                    borderRadius: '8px 8px 0 0',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>

            {/* Utilization Stats */}
            <div className="utilization-stats-grid">
              <div className="stat-card">
                <div className="stat-icon green">💰</div>
                <div className="stat-value">$ 32,984</div>
                <div className="stat-label">Estimated Cost</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon blue">📍</div>
                <div className="stat-value">35 Km</div>
                <div className="stat-label">Average Range</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon cyan">💵</div>
                <div className="stat-value">$ 2,400</div>
                <div className="stat-label">Consumables Cost</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon purple">💎</div>
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
                <span className="setting-label">Email me when someone follow me</span>
                <div 
                  className={`toggle-switch ${settings.emailFollow ? 'active' : ''}`}
                  onClick={() => toggleSetting('emailFollow')}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
              <div className="setting-item">
                <span className="setting-label">Email me when someone answers me</span>
                <div 
                  className={`toggle-switch ${settings.emailAnswers ? 'active' : ''}`}
                  onClick={() => toggleSetting('emailAnswers')}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
              <div className="setting-item">
                <span className="setting-label">Email me when someone mentions me</span>
                <div 
                  className={`toggle-switch ${settings.emailMentions ? 'active' : ''}`}
                  onClick={() => toggleSetting('emailMentions')}
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
                  className={`toggle-switch ${settings.newReleases ? 'active' : ''}`}
                  onClick={() => toggleSetting('newReleases')}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
              <div className="setting-item">
                <span className="setting-label">Monthly product updates</span>
                <div 
                  className={`toggle-switch ${settings.productUpdates ? 'active' : ''}`}
                  onClick={() => toggleSetting('productUpdates')}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
              <div className="setting-item">
                <span className="setting-label">Subscribe to newsletter</span>
                <div 
                  className={`toggle-switch ${settings.newsletter ? 'active' : ''}`}
                  onClick={() => toggleSetting('newsletter')}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
              <div className="setting-item">
                <span className="setting-label">Receive insite weekly</span>
                <div 
                  className={`toggle-switch ${settings.weeklyDigest ? 'active' : ''}`}
                  onClick={() => toggleSetting('weeklyDigest')}
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
                  <img src="/assets/dashboard/wasp.jpg" alt="WASP" onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="font-size: 48px;">🔧</div>';
                  }} />
                </div>
                <div className="product-info">
                  <div className="product-category">PROJECT #1</div>
                  <div className="product-name">WASP</div>
                  <div className="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar
                  </div>
                  <button className="product-btn">Info</button>
                </div>
              </div>

              <div className="product-item">
                <div className="product-image">
                  <img src="/assets/dashboard/snail.jpg" alt="SNAIL" onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="font-size: 48px;">🏗️</div>';
                  }} />
                </div>
                <div className="product-info">
                  <div className="product-category">PROJECT #2</div>
                  <div className="product-name">SNAIL</div>
                  <div className="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar
                  </div>
                  <button className="product-btn">Info</button>
                </div>
              </div>

              <div className="product-item">
                <div className="product-image">
                  <img src="/assets/dashboard/bike.jpg" alt="E-Vehicle" onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="font-size: 48px;">🏍️</div>';
                  }} />
                </div>
                <div className="product-info">
                  <div className="product-category">PROJECT #3</div>
                  <div className="product-name">B</div>
                  <div className="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar
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
            <a href="#" className="footer-link">Marketplace</a>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">License</a>
          </div>
        </div>
      </main>
    </div>
  );
}
