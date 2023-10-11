import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { TaskList } from "./components/TaskList";
import { TaskModal } from "./components/TaskModal";
import { TaskNavbar } from "components/TaskNavbar";

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const openModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <TaskNavbar openModal={openModal} />
      </header>
      <main className=" mt-5">
        <Container>
          <Row>
            <Col md={8} className="mx-auto">
              <TaskList />
            </Col>
          </Row>
          {isModalOpen && (
            <TaskModal
              show={isModalOpen}
              onHide={closeModal}
              task={selectedTask}
            />
          )}
        </Container>
      </main>
    </>
  );
};
