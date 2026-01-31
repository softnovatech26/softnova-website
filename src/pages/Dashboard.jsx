import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-900 min-h-screen">
      
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="flex-1">
        <Topbar />

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Projects" value="12" />
          <StatCard title="Clients" value="8" />
          <StatCard title="Revenue" value="$4,200" />
          {/* Start user  */}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
