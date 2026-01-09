import { FiDollarSign, FiNavigation, FiTrendingUp, FiPieChart } from 'react-icons/fi';
import UtilizationChart from '../../../charts/UtilizationChart';

const UtilizationCard = ({ data }) => {
  const utilizationData = data || [65, 80, 70, 90, 85, 75, 95];

  const stats = [
    {
      icon: FiDollarSign,
      label: 'Wallet',
      value: '$ 32,984',
      color: 'blue'
    },
    {
      icon: FiNavigation,
      label: 'Average Range',
      value: '35 Km',
      color: 'blue'
    },
    {
      icon: FiDollarSign,
      label: 'Consumables Cost',
      value: '$ 2,400',
      color: 'blue'
    },
    {
      icon: FiPieChart,
      label: 'Maintenance cost',
      value: '$ 5000',
      color: 'blue'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl p-6 border border-border shadow-card">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-1">Utilization</h3>
        <p className="text-sm text-accent-green">(+23%) than last week</p>
      </div>

      {/* Chart */}
      <div className="mb-6 h-48">
        <UtilizationChart data={utilizationData} />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <div className="p-2.5 bg-accent-blue rounded-lg">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-text-secondary mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-white">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UtilizationCard;
