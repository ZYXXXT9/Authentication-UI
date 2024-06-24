import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen p-4 bg-gray-800 text-white">
      <ul>
        <li className="mb-4">
          <Link to="/" className="text-lg font-semibold">
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/settings" className="text-lg font-semibold">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
