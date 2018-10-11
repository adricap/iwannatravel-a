import React, { Component } from "react";
import "./Login.css";
//import Register from "../Register/Register";

class Login extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    email: "",
    password: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Email: ${this.state.email}\nPassword: ${this.state.password}`);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="backgroundimage">
        <div className="container text-center ">
          <br />
          <br />
          <h1>FIND TRAVEL PARTNERS</h1>
          <br />
          <div className="jumbotron">
            <br />
            <h3>Login</h3>
            <div className="form-group placeholder-shown">
              <label for="email">Username</label>
              <br />
              <input
                type="text"
                placeholder="example@domain.com"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <br />
              <div className="form-group placeholder-shown">
                <label for="password">Password</label>
                <br />
                <input
                  type="password"
                  placeholder="*********"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <br />
              </div>

              <button
                type="button"
                className="btn btn-warning text-white"
                onClick={this.handleFormSubmit}
              >
                Submit
              </button>
            </div>
            <p>Don't have an account?</p>
            <a href="./Register/Register.js">Register Here!</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
