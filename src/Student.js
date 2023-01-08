import React from "react";
import { Component } from "react";

class Student extends Component {
  constructor() {
    super();
    console.log("student constrctor");
  }
  componentWillUnmount() {
    alert("componentWillUnmount called");
  }
  render() {
    return (
      <>
        <h1>Student Component</h1>
      </>
    );
  }
}

export default Student;
