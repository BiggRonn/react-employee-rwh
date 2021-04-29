import React from "react";
import { Container, Table } from "react-bootstrap";




function EmployeeTable({ employees }) {
 
  return (
    <Container>
      <Table>
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
            <td><img src={employee.image} alt="Employee"/></td>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td></td>
          </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  );
}



export default EmployeeTable;