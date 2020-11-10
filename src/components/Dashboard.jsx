import React, { Component } from "react";
import auth from "../services/authService";

class Dashboard extends Component {
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
        <h1>Dashboard, Welcome {user.name}</h1>
        <button
          className="btn btn-warning"
          onClick={() => {
            auth.logout();
            window.location = "/";
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default Dashboard;
