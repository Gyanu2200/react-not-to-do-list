import React from "react";
import { Table } from "react-bootstrap";

export const BadList = ({ badList, switchTask }) => {
  return (
    <div>
      <div className="row mr-4">
        <div className="col">
          <Table striped bordered hover variant="danger">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Handle</th>
              </tr>
            </thead>
            <tbody id="bad-task">
              {badList.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.task}</td>
                    <td>{item.hr}</td>
                    <td>
                      <button className="btn btn-danger">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={() => switchTask(item._id, "entry")}
                      >
                        <i className="fa-solid fa-left-long"></i>
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
};
