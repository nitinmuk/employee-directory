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