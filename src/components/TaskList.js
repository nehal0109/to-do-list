// src/components/TaskList.js
import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = ({ viewMode, onSelectTask }) => {
  const tasks = useSelector((state) => state.tasks.tasks);

  // Separate active vs. completed
  const activeTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  // Container classes for top-level styling
  const containerClass =
    viewMode === 'card'
      ? 'task-list-container card-mode'
      : 'task-list-container list-mode';

  return (
    <div className={containerClass}>
      <h3>Tasks</h3>
      <div className="active-tasks">
        {activeTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            viewMode={viewMode} // Pass the view mode here
            onSelectTask={(selectedTask) => onSelectTask && onSelectTask(selectedTask)}
          />
        ))}
      </div>

      {completedTasks.length > 0 && <h4>Completed</h4>}
      <div className="completed-tasks">
        {completedTasks.map((task) => (
          // Force list mode if you want completed tasks always in list style:
          <TaskItem key={task.id} task={task} viewMode="list" />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
