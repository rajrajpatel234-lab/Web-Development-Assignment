import { FiSearch, FiBell, FiSettings } from 'react-icons/fi';

const TopNav = ({ user }) => {
  return (
    <div className="fixed top-0 right-0 left-64 h-16 bg-primary-light border-b border-border flex items-center justify-between px-6 z-10">
      {/* Left Section - Page Title */}
      <div>
        <h2 className="text-lg font-semibold text-white">Pages / Dashboard</h2>
        <p className="text-sm text-text-secondary">Profile</p>
      </div>

      {/* Right Section - Search & Actions */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Type here..."
            className="w-64 pl-10 pr-4 py-2 bg-secondary rounded-lg text-sm text-white placeholder-text-muted border border-border focus:border-accent-blue focus:outline-none transition-colors"
          />
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        </div>

        {/* Action Buttons */}
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-white transition-colors">
          <span>🔗</span>
          <span>Sign In</span>
        </button>

        <button className="relative p-2 text-text-secondary hover:text-white transition-colors">
          <FiBell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent-blue rounded-full"></span>
        </button>

        <button className="p-2 text-text-secondary hover:text-white transition-colors">
          <FiSettings className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TopNav;
