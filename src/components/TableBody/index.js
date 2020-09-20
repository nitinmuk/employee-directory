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

/**
 * creates an array of td element for input employee
 * and returns same
 * @param {employee object to render} employee 
 */
function getTableRowData(employee){
    const tableData = [];
    Object.keys(employee)
    .forEach(data => tableData.push(<td key={data}>{employee[data]}</td>));
    return tableData;
}

export default TableBody;