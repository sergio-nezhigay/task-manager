import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../store/tasksSlice";
import Row from "react-bootstrap/Row";
import { v4 as uuidv4 } from "uuid";
import * as formik from "formik";
import * as yup from "yup";

function TaskModal({ show, onHide, task }) {
  const { Formik } = formik;
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string(),
    completed: yup.bool(),
  });

  const handleSubmit = ({ name, description, completed }) => {
    const taskData = {
      id: task ? task.id : uuidv4(),
      name,
      description,
      completed,
    };

    if (task) {
      dispatch(editTask(taskData));
    } else {
      dispatch(addTask(taskData));
    }

    onHide();
  };

  const initialValues = {
    name: task ? task.name : "",
    description: task ? task.description : "",
    completed: task ? task.completed : false,
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{task ? "Edit Task" : "Add Task"}</Modal.Title>
      </Modal.Header>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Modal.Body>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik03">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="8" controlId="validationFormik04">
                  <Form.Label>description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="description"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  name="completed"
                  label="Completed"
                  onChange={handleChange}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Save ✔️
              </Button>
              <Button variant="secondary" onClick={onHide} type="button">
                Close ❌
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default TaskModal;
