import React, { Fragment } from "react";

import "./Card.css";

export default (props) => {
  return props.towers.map((tower) => (
    <div className="card" key={tower.id}>
      <button>{tower.id}</button>
      <h3>{tower.site_type}</h3>
      <p>{tower.site_name}</p>
    </div>
  ));
};

// props.towers.map((tower) => (
//     <Fragment key={tower.id}>
//       <ul>
//         <li>{tower.site_type}</li>
//         <li>{tower.site_name}</li>
//         <li>{tower.id}</li>
//         <li>{tower.site_address.city}</li>
//       </ul>
//     </Fragment>
//   ));
