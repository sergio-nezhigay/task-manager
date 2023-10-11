import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

import { selectVisibleTasks } from "../store/selectors";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TaskList() {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={task.id}>
          <TaskItem task={task} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
