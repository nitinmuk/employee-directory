import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div  className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Employee Directory</h1>
          <p className="lead text-center">An app to view, search and sort employees</p>
        </div>
      </div>
    </header>
  );
}

export default Header;