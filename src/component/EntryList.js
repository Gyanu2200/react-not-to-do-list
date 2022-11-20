import React from "react";
import { Table } from "react-bootstrap";
import BadList from "./BadList";

export default function () {
  return (
    <div>
      <div className="row m-4">
        <div className="col">
        <Table striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
        </div>
        <div className="col">
            <BadList/>
        </div>
      </div>
    </div>
  );
}