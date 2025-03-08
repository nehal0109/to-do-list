// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(login({ name: username }));
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Your To-Do</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
