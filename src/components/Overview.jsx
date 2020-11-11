import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import Dashboard from "./Dashboard";
import MyJournal from "./myJournal";
import PostingPlan from "./Plan";
import Analytics from "./analytics";
import Settings from "./settings";
import auth from "../services/authService";

class Overview extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    this.setState({ user: auth.currentUser() });
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <SideBar />
        <NavBar />
        <Switch>
          <Route
            path="/overview/dashboard"
            render={() => <Dashboard user={user} />}
          />
          <Route path="/overview/journal" component={MyJournal} />
          <Route path="/overview/plan" component={PostingPlan} />
          <Route path="/overview/analytics" component={Analytics} />
          <Route path="/overview/settings" component={Settings} />
          <Redirect from="/overview" to="overview/dashboard" />
        </Switch>
      </div>
    );
  }
}

export default Overview;
