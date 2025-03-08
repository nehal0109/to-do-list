import React from 'react';
import { FaSun, FaMoon, FaThLarge, FaListUl } from 'react-icons/fa';

const TopBar = ({
  onToggleTheme,
  currentTheme,
  onToggleViewMode,
  currentViewMode,
  onToggleRightSidebar,
  onToggleSidebar,
}) => {
  return (
    <header className="top-bar">
      {/* Left side: Could include a logo or menu icon */}
      <button className="hamburger-button" onClick={onToggleSidebar}>
        &#9776;
      </button>
      <div className="top-bar-left">
        <div className="logo">Do It</div>
      </div>

      {/* Right side: Theme toggle, view toggle, and a button to open Right Sidebar */}
      <div className="top-bar-right">
        {/* Dark/Light Mode Toggle */}
        <button
          className="icon-button"
          onClick={onToggleTheme}
          title="Toggle Dark/Light Mode"
        >
          {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        {/* List/Card View Toggle */}
        <button
          className="icon-button"
          onClick={onToggleViewMode}
          title="Toggle List/Card View"
        >
          {currentViewMode === 'list' ? <FaThLarge /> : <FaListUl />}
        </button>

        {/* Example: Button to open the right sidebar (task details) */}
        <button
          className="icon-button"
          onClick={onToggleRightSidebar}
          title="Open Task Details"
        >
          Details
        </button>
      </div>
    </header>
  );
};

export default TopBar;
