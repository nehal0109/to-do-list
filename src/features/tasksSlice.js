import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ✅ Keep the existing weather fetch function
export const fetchWeather = createAsyncThunk(
  'tasks/fetchWeather',
  async (city) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    return response.data;
  }
);

// ✅ Keep existing initial state, but add `isImportant` property for tasks
const initialState = {
  tasks: [], // Existing task structure remains unchanged
  weather: null,
  status: 'idle',
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload, isImportant: false }); // ✅ Ensure new tasks have `isImportant`
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    toggleTaskImportance: (state, action) => {
      // ✅ New reducer to toggle star importance
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.isImportant = !task.isImportant;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// ✅ Export all reducers, including the new `toggleTaskImportance`
export const { addTask, toggleTaskCompletion, toggleTaskImportance, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
