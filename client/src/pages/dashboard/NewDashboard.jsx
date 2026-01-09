import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDashboardData } from "../../services/dashboardService";
import Sidebar from "../../components/dashboard/common/Sidebar";
import TopNav from "../../components/dashboard/common/TopNav";
import ProfileCard from "../../components/dashboard/cards/ProfileCard";
import MOPTroInfoCard from "../../components/dashboard/cards/MOPTroInfoCard";
import UtilizationCard from "../../components/dashboard/cards/UtilizationCard";
import PlatformSettingsCard from "../../components/dashboard/cards/PlatformSettingsCard";
import ProductsCard from "../../components/dashboard/cards/ProductsCard";

export default function NewDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const res = await fetchDashboardData();
      setData(res.data);
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
      // Use default data if API fails
      setData({
        user: {
          name: "Mark Johnson",
          email: "mark.johnson@example.com",
          role: "Customer"
        },
        utilization: [65, 80, 70, 90, 85, 75, 95]
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-text-secondary">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary">
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} />

      {/* Main Content Area */}
      <div className="ml-64">
        {/* Top Navigation */}
        <TopNav user={data?.user} />

        {/* Dashboard Content */}
        <div className="pt-16 p-6">
          {/* Profile Section */}
          <div className="mb-6">
            <ProfileCard user={data?.user} />
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* MOPTro Information */}
            <MOPTroInfoCard />

            {/* Right Column */}
            <div className="space-y-6">
              {/* Utilization */}
              <UtilizationCard data={data?.utilization} />
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Platform Settings */}
            <PlatformSettingsCard />

            {/* Products */}
            <ProductsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
