export const statusFilters = Object.freeze({
  all: "all",
  active: "Active",
  completed: "Completed",
});

export const initialTasks = [
  {
    id: 1,
    name: "Word Play",
    description:
      "Create a new task with a title that includes the word 'Banana.'",
    completed: false,
  },
  {
    id: 2,
    name: "Timer Challenge",
    description:
      "Set a timer for 30 seconds and complete a task before it runs out",
    completed: false,
  },
  {
    id: 3,
    name: "Emoji Express",
    description: "Add an emoji to any existing task",
    completed: true,
  },
];
