import React, { Component } from "react";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <h1 className="container">
        Welcome to the Dashboard {this.props.user.name}
      </h1>
    );
  }
}

export default Dashboard;
