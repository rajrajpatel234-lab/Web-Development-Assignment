import { FiEdit2 } from 'react-icons/fi';

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl p-6 border border-border shadow-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-white shadow-glow">
              {user?.name?.charAt(0) || 'M'}
            </div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-accent-green rounded-full border-2 border-secondary"></div>
          </div>

          {/* User Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {user?.name || 'Mark Johnson'}
            </h3>
            <p className="text-sm text-text-secondary">
              {user?.email || 'mark.johnson@example.com'}
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <button className="p-2 bg-secondary hover:bg-secondary-light rounded-lg transition-colors">
          <FiEdit2 className="w-4 h-4 text-text-secondary" />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2.5 bg-accent-blue hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-glow">
          + OVERVIEW
        </button>
        <button className="flex-1 px-4 py-2.5 bg-secondary hover:bg-secondary-light text-white font-medium rounded-lg transition-all">
          + TEAMS
        </button>
        <button className="flex-1 px-4 py-2.5 bg-secondary hover:bg-secondary-light text-white font-medium rounded-lg transition-all">
          + PROJECTS
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
