/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Header from "../../components/header";

const Login = (props) => {
  return (
    <div>
      <Header />
      This is Login
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Login);
