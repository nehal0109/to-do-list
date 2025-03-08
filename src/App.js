import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TopBar from './components/TopBar';
import RightSidebar from './components/RightSideBar';
import './styles.css'; // Make sure you import your main stylesheet

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // 1. Theme state
  const [theme, setTheme] = useState('dark'); // or 'light'

  // 2. View mode state
  const [viewMode, setViewMode] = useState('list'); // or 'card'

  // 3. Right sidebar toggle
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  // 4. Sidebar toggle state (for hamburger)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Example: If you want to display a specific task in the right sidebar
  const [selectedTask, setSelectedTask] = useState(null);

  // Toggle theme (dark <-> light)
  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Toggle view mode (list <-> card)
  const handleToggleViewMode = () => {
    setViewMode((prev) => (prev === 'list' ? 'card' : 'list'));
  };

  // Toggle right sidebar
  const handleToggleRightSidebar = () => {
    setIsRightSidebarOpen((prev) => !prev);
  };

  const handleCloseRightSidebar = () => {
    setIsRightSidebarOpen(false);
    setSelectedTask(null);
  };

  // Toggle sidebar (hamburger behavior)
  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // If user isn't logged in, show Login
  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div className={`app-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      {/* TOP BAR */}
      <TopBar
        onToggleTheme={handleToggleTheme}
        currentTheme={theme}
        onToggleViewMode={handleToggleViewMode}
        currentViewMode={viewMode}
        onToggleRightSidebar={handleToggleRightSidebar}
        onToggleSidebar={handleToggleSidebar}
      />

      <div className="main-layout">
        {/* LEFT SIDEBAR */}
        {isSidebarOpen && <Sidebar theme={theme}/>}  {/* Conditionally render Sidebar */}

        {/* CONTENT AREA */}
        <div className="content-area">
          <TaskInput />
          <TaskList
            viewMode={viewMode}
            onSelectTask={(task) => {
              setSelectedTask(task);
              setIsRightSidebarOpen(true);
            }}
          />
        </div>

        {/* RIGHT SIDEBAR */}
        <RightSidebar
          isOpen={isRightSidebarOpen}
          onClose={handleCloseRightSidebar}
          selectedTask={selectedTask}
        />
      </div>
    </div>
  );
}

export default App;
