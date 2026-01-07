import "../../styles/dashboard.css";


export default function PlatformSettings() {
  const settings = [
    { id: 1, label: "Send the update indicator to all", icon: "🔔", active: true },
    { id: 2, label: "Engage other platform drivers (iot)", icon: "🔗", active: false },
    { id: 3, label: "Use Geo location tracking", icon: "📍", active: true },
    { id: 4, label: "Nearby product updates", icon: "📦", active: false },
    { id: 5, label: "Generate quality", icon: "⭐", active: true },
  ];

  const toggleSetting = (id) => {
    console.log(`Toggle setting ${id}`);
    // This would update state in a real application
  };

  return (
    <div className="settings-list">
      {settings.map((setting) => (
        <div key={setting.id} className="setting-item">
          <div className="setting-info">
            <div className="setting-icon">{setting.icon}</div>
            <span className="setting-label">{setting.label}</span>
          </div>
          <div
            className={`toggle-switch ${setting.active ? "active" : ""}`}
            onClick={() => toggleSetting(setting.id)}
          >
            <div className="toggle-thumb"></div>
          </div>
        </div>
      ))}
    </div>
  );
}