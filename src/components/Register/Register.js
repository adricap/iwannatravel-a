import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  // Setting the component's initial state
  state = {
    fullName: "",
    email: "",
    gender: "",
    age: "",
    city: "",
    language: "",
    smoke: "",
    drinker: "",
    drugs: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.fullName || !this.state.email) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(`Choose a more secure password ${this.state.fullName}`);
    } else {
      alert(`Hello ${this.state.fullName}`);
    }

    this.setState({
      fullName: "",
      email: "",
      city: "",
      password: "",
      gender: "",
      age: "",
      smoke: "",
      drinker: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="backgroundimage">
        <div className="container text-center ">
          <br />
          <br />
          <h1>FIND TRAVEL PARTNERS</h1>
          <br />
          <div className="jumbotron">
            <br />
            <h3>Register</h3>
            <br />
            <div className="form-group">
              <label for="fullName">Full Name</label>
              <br />
              <input
                value={this.state.fullName}
                name="fullName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <br />
              <input
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
                type="text"
                placeholder="example@domain.com"
              />
            </div>
            <div className="form-group">
              <label for="city">City</label>
              <br />
              <input
                value={this.state.city}
                name="city"
                onChange={this.handleInputChange}
                type="text"
                placeholder="city"
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <br />
              <input
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="*********"
              />
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label for="Gender">Gender</label>
                  <br />
                  <select>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label for="age">Age</label>
                  <br />
                  <input
                    value={this.state.age}
                    name="age"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="age"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label for="smoke">Smoke?</label>
                  <br />
                  <select>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label for="driker">Drink?</label>
                  <br />
                  <select>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-warning text-white"
              onClick={this.handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
