import React from "react";

import classes from "./Logo.css";
import burgerLogo from "../../assets/images/burger-logo.png";

const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Hamburger" />
  </div>
);

export default logo;
