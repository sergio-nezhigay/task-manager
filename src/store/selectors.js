import { createSelector } from "reselect";

import { statusFilters } from "./constants";

export const selectTasks = (state) => state.tasks.tasks;
export const selectStatusFilter = (state) => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter((task) => !task.completed);
      case statusFilters.completed:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);
