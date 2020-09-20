import React from "react";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";
import Table from 'react-bootstrap/Table';

function EmployeeTable(props) {
  return (<Table responsive>
    <TableHeader
      colNames={["id","name","department","email"]}
      handleEmployeeSort={props.handleEmployeeSort}
    />
    <TableBody
      employees={props.employees}
    />
  </Table>
  );
}

export default EmployeeTable;