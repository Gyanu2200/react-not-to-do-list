import React from "react";
import { Table } from "react-bootstrap";
import BadList from "./BadList";

export default function ({ taskList, switchTask }) {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Table striped bordered hover variant="primary">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Handle</th>
              </tr>
            </thead>
            <tbody id="task-list">
              {taskList.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.task}</td>
                    <td>{item.hr}</td>
                    <td>
                      <button className="btn btn-danger">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      <button className="btn btn-success" onClick={()=>switchTask(item._id, "bad")}>
                        <i className="fa-solid fa-right-long"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
