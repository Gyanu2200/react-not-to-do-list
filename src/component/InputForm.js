import { React, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { randomStr } from "../util";

export default function InputForm({ addTask }) {
  // we are using useState to store the value from onchange on the state memory. So the value doesn't disappear when the component re-renders
  // and the initial value of useState is given as a an object with key and value pair,
  const [captureInput, setCaptureInput] = useState({ type: "entry" });
  const handleOnChange = (e) => {
    // const { name, value } = e.target;
    // destructuring
    const { value, name } = e.target;
    setCaptureInput({
      ...captureInput,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const _id = randomStr();
    addTask({ ...captureInput, _id });
    console.log();
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit} className="m-5">
        <Row className="my-4">
          <Col className="">
            <Form.Control
              placeholder="Task name"
              name="task"
              type="text"
              required
              onChange={handleOnChange}
            />
          </Col>
          <Col className="">
            <Form.Control
              placeholder="Hours"
              name="hr"
              type="number"
              required
              onChange={handleOnChange}
            />
          </Col>
        </Row>
        <Button variant="primary" type="submit align-center">
          <i className="fa-solid fa-plus"></i>
          <span className="p-2">Add New Task</span>
        </Button>
      </Form>
    </div>
  );
}
