import React from "react";

import "./Button.css";

export default (props) => {
  return <button onClick={props.alert}>{props.name}</button>;
};
