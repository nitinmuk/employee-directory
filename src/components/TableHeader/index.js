import React from "react";
import "./style.css";
const TableHeader = (props) => {
    return (
        <thead>
            <tr>
                {getTableHeaders(props)}
            </tr>
        </thead>
    );
}
/**
 * creates an array of th elements corresponding to columnNames
 * and returns same i.e. one th element for one columnName
 * @param {props passed to component} props 
 */
function getTableHeaders(props) {
    const headers = [];
    props.colNames.forEach(element => {
        const header = <th className="header" onClick={props.handleEmployeeSort} key={element}>
            {getHeaderName(element)}            
        </th>
        headers.push(header);
    });
    return headers;
}
/**
 * returns a user friendly column name for each object key
 * so that same can be rendered in UI
 * @param {one of the key of employee object} element 
 */
function getHeaderName(element) {
    switch(element) {
        case "id":
            return "Employee ID";
        case "name":
            return "Name";
        case "department":
            return "Department";
        case "email":
            return "Email ID";
        default:
            return element;
    }
}

export default TableHeader;