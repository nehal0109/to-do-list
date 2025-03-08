import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import { FiCalendar, FiList, FiStar, FiMap, FiUser, FiPlus, FiInfo } from "react-icons/fi";
import { PieChart, Pie, Cell } from "recharts";
import "./sidebar.css"; // Import custom CSS

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [theme, setTheme] = useState(props.theme);
  const data = [
    { name: "Done", value: 7, color: "#2ECC71" },
    { name: "Pending", value: 4, color: "#A3E4D7" }
  ];

  useEffect(() => {
    setTheme(props.theme);
  }, [props.theme]);

  return (
    <aside className={`sidebar-leftss ${theme}`}>
      {/* User Profile */}
      <div className="profile-leftss">
        <img src="/man.png" alt="Profile" className="profile-image" />
        <h3>Hey, {user?.name || "ABCD"}</h3>
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-section-leftss">
          <ul className="sidebar-list-leftss">
            <li className="sidebar-item-leftss">
              <FiList />
              <span>All Tasks</span>
            </li>
            <li className="sidebar-item-leftss active">
              <FiCalendar />
              <span>Today</span>
            </li>
            <li className="sidebar-item-leftss">
              <FiStar />
              <span>Important</span>
            </li>
            <li className="sidebar-item-leftss">
              <FiMap />
              <span>Planned</span>
            </li>
            <li className="sidebar-item-leftss">
              <FiUser />
              <span>Assigned to me</span>
            </li>
          </ul>
        </div>

        <div className="nav-section-leftss">
          <ul className="sidebar-list-leftss">
            <li className="sidebar-item-leftss">
              <FiPlus />
              <span>Add list</span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Task Summary */}
      <div className="task-summary-leftss">
        <div className="summary-header-leftss">
          <h4>Today Tasks</h4>
          <FiInfo size={14} />
        </div>
        <h2>11</h2>

        {/* Pie Chart */}
        <PieChart width={100} height={100}>
          <Pie data={data} dataKey="value" outerRadius={40} innerRadius={20}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <div className="legend-leftss">
          <span className="pending-leftss">Pending</span>
          <span className="done-leftss">Done</span>
        </div>
      </div>

      {/* Logout Button */}
      <button className="logout-leftss" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
