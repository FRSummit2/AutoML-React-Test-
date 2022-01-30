import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

//Pages
import Login from "../views/login";
import Home from "../views/home";
import ProjectDashboard from '../views/ProjectDashboard'

const Routes = ({ user }) => {
  return (
    <React.Fragment>

      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/project-dashboard" component={ProjectDashboard} />
          <Redirect to={`/`} />
        </Switch>

      {/* {!user.isLoggedIn ? (
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path={`/`} component={DemoDashboard} />
          <Redirect to={`/`} />
        </Switch>
      )} */}
    </React.Fragment>
  );
};

export default connect((state) => ({ user: state.user }), null)(Routes);
