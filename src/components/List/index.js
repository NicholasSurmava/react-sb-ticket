import React, { Component } from "react";
import { Fragment } from "react";

export default (props) => {
  return props.towers.map((tower) => (
    <Fragment key={tower.id}>
      <ul>
        <li>{tower.site_type}</li>
        <li>{tower.site_name}</li>
        <li>{tower.id}</li>
        <li>{tower.site_address.city}</li>
      </ul>
    </Fragment>
  ));
};
