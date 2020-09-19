import React from "react";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import TableBody from "../TableBody";
import Table from 'react-bootstrap/Table';

function EmployeeTable(props) {
  return (<Table responsive striped bordered hover>
    <thead>
      <TableRow>
        <TableHeader colName="Employee ID"></TableHeader>
        <TableHeader colName="Name"></TableHeader>
        <TableHeader colName="Department"></TableHeader>
        <TableHeader colName="Email"></TableHeader>
      </TableRow>
    </thead>
    <TableBody employees={props.employees} />
  </Table>
  );
}

export default EmployeeTable;