import React from 'react';
import { FaTimes } from 'react-icons/fa';

const RightSidebar = ({ isOpen, onClose, selectedTask }) => {
  // Optional: If you have data for a selected task, display it here
  const taskTitle = selectedTask ? selectedTask.text : 'No Task Selected';

  return (
    <div className={`right-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="right-sidebar-header">
        <h3>{taskTitle}</h3>
        <button className="icon-button close-btn" onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      <div className="right-sidebar-content">
        <ul className="task-options">
          <li>Add Step</li>
          <li>Set Reminder</li>
          <li>Add Due Date</li>
          <li>Repeat</li>
        </ul>
        <textarea className="notes-area" placeholder="Add Notes" />
      </div>

      <div className="right-sidebar-footer">Created Today</div>
    </div>
  );
};

export default RightSidebar;
