/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
        <NavLink to="/">Login</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/project-dashboard">Project Dashboard</NavLink>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Header);
