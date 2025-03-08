// src/components/TaskItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskCompletion, toggleTaskImportance } from '../features/tasksSlice';

const TaskItem = ({ task, viewMode, onSelectTask }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  const handleStarClick = (e) => {
    e.stopPropagation();  // Prevent opening the right sidebar
    dispatch(toggleTaskImportance(task.id));
  };

  const handleItemClick = () => {
    // Clicking anywhere else on the task opens the right sidebar
    if (onSelectTask) {
      onSelectTask(task);
    }
  };

  return (
    <div
      className={`task-item
        ${viewMode === 'card' ? 'card-view' : 'list-view'}
        ${task.completed ? 'completed' : ''}`}
      onClick={handleItemClick}
    >
      {/* Left side: checkbox + text */}
      <div className="task-info">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          onClick={(e) => e.stopPropagation()} // So checking box won't open sidebar
        />
        <span>{task.text}</span>
      </div>

      {/* Right side: star only (no delete) */}
      <div className="task-actions">
        <span className="star-icon" onClick={handleStarClick}>
          {task.isImportant ? '★' : '☆'}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
