import React from "react";
import { Container, Table } from "react-bootstrap";
import moment from 'moment';



function EmployeeTable({ employees }) {
  // const localEmployees = employees.length > 0 && employees
  return (
    <Container>
      <Table striped bordered hover>
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
          <tr key={employee.phone}>
            <td><img src={employee.image} alt="Picture of employee"/></td>
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