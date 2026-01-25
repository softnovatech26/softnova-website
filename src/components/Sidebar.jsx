import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold text-blue-500 mb-10">
        SoftNova Admin
      </h2>

      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
        </li>
        <li className="hover:text-blue-400 cursor-pointer">Projects</li>
        <li className="hover:text-blue-400 cursor-pointer">Users</li>
        <li className="hover:text-blue-400 cursor-pointer">Settings</li>
        <li className="hover:text-red-400 cursor-pointer">Logout</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
