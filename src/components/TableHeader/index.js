import React from "react";
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
        const header = <th onClick={props.handleEmployeeSort} key={element}>
            {element}
        </th>
        headers.push(header);
    });
    return headers;
}

export default TableHeader;