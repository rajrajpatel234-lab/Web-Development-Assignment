import { FiBattery, FiTrendingUp, FiZap } from 'react-icons/fi';
import TrendChart from '../../../charts/TrendChart';

const MOPTroInfoCard = () => {
  const moptroData = {
    charge: 68,
    chargeTime: '0h 58 min',
    chargeTimeStatus: 'Time left to full charge',
    efficiency: {
      value: 163,
      unit: 'W/km',
      trend: 'up'
    },
    happiness: {
      value: 76,
      unit: '%',
      trend: 'up'
    },
    performance: {
      value: 20,
      unit: '%',
      trend: 'up'
    },
    consumption: {
      value: 1.342,
      unit: 'km',
      trend: 'down'
    }
  };

  return (
    <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl p-6 border border-border shadow-card">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-1">MOPTro Informations</h3>
        <p className="text-sm text-text-secondary">Hello, Kyle, choose your MOPTro is ready.</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Charge Indicator */}
        <div className="col-span-2 flex items-center justify-center relative">
          <div className="relative">
            {/* Circular Progress */}
            <svg className="w-40 h-40 transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - moptroData.charge / 100)}`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="100%" stopColor="#4d7cff" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-4xl font-bold text-white">{moptroData.charge}%</span>
              <span className="text-xs text-text-secondary mt-1">{moptroData.chargeTime}</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {/* Happy Users */}
          <div className="bg-secondary rounded-xl p-4 border border-border">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-accent-blue rounded-lg">
                <FiTrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs text-accent-green">+{moptroData.happiness.value}%</span>
            </div>
            <p className="text-xs text-text-secondary mb-1">Happy Users</p>
            <p className="text-2xl font-bold text-white">{moptroData.happiness.value}%</p>
          </div>

          {/* Performance */}
          <div className="bg-secondary rounded-xl p-4 border border-border">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-accent-blue rounded-lg">
                <FiZap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs text-accent-green">+{moptroData.performance.value}%</span>
            </div>
            <p className="text-xs text-text-secondary mb-1">Performance</p>
            <p className="text-2xl font-bold text-white">{moptroData.performance.value}%</p>
          </div>

          {/* Efficiency */}
          <div className="bg-secondary rounded-xl p-4 border border-border">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-accent-blue rounded-lg">
                <FiBattery className="w-5 h-5 text-white" />
              </div>
              <div className="w-16 h-8">
                <TrendChart />
              </div>
            </div>
            <p className="text-xs text-text-secondary mb-1">Efficiency</p>
            <p className="text-2xl font-bold text-white">{moptroData.efficiency.value}{moptroData.efficiency.unit}</p>
          </div>

          {/* Consumption */}
          <div className="bg-secondary rounded-xl p-4 border border-border">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-accent-blue rounded-lg">
                <FiZap className="w-5 h-5 text-white" />
              </div>
              <div className="w-16 h-8">
                <TrendChart />
              </div>
            </div>
            <p className="text-xs text-text-secondary mb-1">Consumption</p>
            <p className="text-2xl font-bold text-white">{moptroData.consumption.value}{moptroData.consumption.unit}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MOPTroInfoCard;
