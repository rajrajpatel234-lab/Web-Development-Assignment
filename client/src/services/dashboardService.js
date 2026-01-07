import api from "./apiService";

export const fetchDashboardData = () => api.get("/dashboard");
