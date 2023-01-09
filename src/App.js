import React, { useState } from "react";
import MyUseEffect from "./MyUseEffect";

import { Button, Alert } from "react-bootstrap";

import { Table } from "react-bootstrap";
import User from "./User";

function App() {
  const [counter, setCounter] = useState(10);
  const [data, setData] = useState(100);

  const users = [
    {
      name: "taha",
      age: 21,
      gender: "male",
      address: [
        { state: "maharashtra", city: "mumbai" },
        { state: "delhi", city: "chandni chowk" },
        { state: "punjab", city: "amritsar" },
      ],
    },
    {
      name: "adil",
      age: 31,
      gender: "male",
      address: [
        { state: "delhi", city: "chandni chowk" },
        { state: "maharashtra", city: "mumbai" },
        { state: "punjab", city: "amritsar" },
      ],
    },
    {
      name: "maaz",
      age: 35,
      gender: "male",
      address: [
        { state: "punjab", city: "amritsar" },
        { state: "delhi", city: "chandni chowk" },
        { state: "maharashtra", city: "mumbai" },
      ],
    },
  ];

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>App.js Component</h1>
      {/* <Button onClick={() => alert("hello")}>Click Me</Button>
      <MyUseEffect data={data} counter={counter}></MyUseEffect>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }} 
      >
        Update Count
      </button>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Update Data
      </button> */}

      {users.map((user) => (
        <div>
          <User data={use}></User>
        </div>
      ))}

      {/* <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>State</th>
                      <th>City</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.address.map((address, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{address.state}</td>
                        <td>{address.city}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </div>
  );
}

export default App;
