import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialTasks = [
  {
    id: 1,
    name: "Task 1",
    description: "Description of Task 1",
    completed: false,
  },
  {
    id: 2,
    name: "Task 2",
    description: "Description of Task 2",
    completed: true,
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: initialTasks,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, name, description, completed } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        const updatedTask = {
          ...state.tasks[taskIndex],
          name,
          description,
          completed,
        };
        state.tasks.splice(taskIndex, 1, updatedTask);
      }
    },
    toggleTaskStatus: (state, action) => {
      const taskId = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        const updatedTask = { ...state.tasks[taskIndex] };
        updatedTask.completed = !updatedTask.completed;
        state.tasks.splice(taskIndex, 1, updatedTask);
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskStatus } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
