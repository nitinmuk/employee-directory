import React from "react";
import "./style.css";

const TableBody = (props) => {
    return (<tbody>
        {props.employees.map(
            employee => {
                return (
                    <tr className="tableRow" key={employee.id}>
                        {getTableRowData(employee)}

                    </tr>
                );
            }
        )}
    </tbody>);
};

function getTableRowData(employee){
    const tableData = [];
    Object.keys(employee)
    .forEach(data => tableData.push(<td key={data}>{employee[data]}</td>));
    return tableData;
}

export default TableBody;