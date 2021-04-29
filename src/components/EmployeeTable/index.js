import React from "react";
import { Container, Table } from "react-bootstrap";


//for body of table, we iterate over our employees array to return a table row for each employee

function EmployeeTable({ employees }) {
 
  return (
    <Container className="d-flex justify-content-between px-4">
      <Table striped border>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => {
            return(
          <tr key={employee.email}>
            <td><img src={employee.picture.thumbnail} alt="Employee"/></td>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.dob.date.substring(0,10)}</td>
          </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  );
}



export default EmployeeTable;