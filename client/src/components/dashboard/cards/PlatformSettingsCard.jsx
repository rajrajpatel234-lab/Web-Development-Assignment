import { useState } from 'react';

const PlatformSettingsCard = () => {
  const [settings, setSettings] = useState({
    emailOnNewCertificateFollows: true,
    emailOnNewCertificateAddresses: false,
    emailOnNewCertificateReplacesBio: false,
    newLaunches: true,
    monthlyProductUpdates: false,
    subscribeToNewsletter: true,
    receiveWeekly: false
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const settingsGroups = [
    {
      title: 'APPLICATION',
      items: [
        { key: 'emailOnNewCertificateFollows', label: 'Email me when continues follows me' },
        { key: 'emailOnNewCertificateAddresses', label: 'Email me when continues addresses me' },
        { key: 'emailOnNewCertificateReplacesBio', label: 'Email me when continues replaces my bio' }
      ]
    },
    {
      title: 'UPDATES',
      items: [
        { key: 'newLaunches', label: 'New launches' },
        { key: 'monthlyProductUpdates', label: 'Monthly product updates' },
        { key: 'subscribeToNewsletter', label: 'Subscribe to newsletter' },
        { key: 'receiveWeekly', label: 'Receive weekly' }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl p-6 border border-border shadow-card">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-1">Platform Settings</h3>
      </div>

      <div className="space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <p className="text-xs text-text-muted uppercase tracking-wider mb-4">
              {group.title}
            </p>
            <div className="space-y-3">
              {group.items.map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">{item.label}</span>
                  <button
                    onClick={() => toggleSetting(item.key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings[item.key] ? 'bg-accent-blue' : 'bg-secondary-light'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings[item.key] ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border text-xs text-text-muted">
        © 2025, Greendzine Technologies Pvt Ltd
      </div>
    </div>
  );
};

export default PlatformSettingsCard;
