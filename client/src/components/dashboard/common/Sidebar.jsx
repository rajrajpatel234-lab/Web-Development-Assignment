import { useState } from 'react';
import { FiHome, FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';

const Sidebar = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: FiHome, label: 'Dashboard' },
    { id: 'teams', icon: FiUsers, label: 'Teams' },
  ];

  const accountItems = [
    { id: 'profile', label: 'Profile' },
    { id: 'signin', label: 'Sign In' },
    { id: 'signup', label: 'Sign Up' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-primary-light border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold text-white">MOPTro</h1>
      </div>

      {/* Menu Section */}
      <div className="flex-1 py-6 px-4 overflow-y-auto">
        <div className="mb-8">
          <p className="text-xs text-text-muted uppercase tracking-wider mb-4 px-3">
            Menu
          </p>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? 'bg-accent-blue text-white shadow-glow'
                      : 'text-text-secondary hover:bg-secondary hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div>
          <p className="text-xs text-text-muted uppercase tracking-wider mb-4 px-3">
            Account Pages
          </p>
          <nav className="space-y-1">
            {accountItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-accent-blue text-white shadow-glow'
                    : 'text-text-secondary hover:bg-secondary hover:text-white'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-border">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:bg-secondary hover:text-white transition-all"
        >
          <FiLogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
