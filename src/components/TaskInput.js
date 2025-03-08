import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';

const TaskInput = () => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (text.trim()) {
      dispatch(
        addTask({
          id: Date.now(),
          text,
          completed: false,
          priority,
        })
      );
      setText('');
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        placeholder="Add a Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
      />

      {/* ✅ Priority Dropdown */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className={`priority-select ${priority.toLowerCase()}`}
      >
        <option value="High">🔥 High</option>
        <option value="Medium">⭐ Medium</option>
        <option value="Low">📌 Low</option>
      </select>

      {/* ✅ Icons Section */}
      <div className="task-icons">
        <span className="icon">📅</span> {/* Calendar */}
        <span className="icon">🔁</span> {/* Loop */}
        <span className="icon">⚙️</span> {/* Settings */}
      </div>

      <button onClick={handleAddTask} className="add-btn">Add Task</button>
    </div>
  );
};

export default TaskInput;
