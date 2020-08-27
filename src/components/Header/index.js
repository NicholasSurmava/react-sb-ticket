import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Header.css";

export default (props) => {
  return (
    <BrowserRouter>
      <header>
        <h1 className="header_h1">{props.name}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/warehouse">Warehouse</Link>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
};
