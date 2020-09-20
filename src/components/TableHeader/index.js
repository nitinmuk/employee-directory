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
            {element}            
        </th>
        headers.push(header);
    });
    return headers;
}

export default TableHeader;