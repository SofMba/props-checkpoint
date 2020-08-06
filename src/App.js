import React from "react";
import List from ".././src/Profile/Profilecomp";
import './App.css';


function App() {
  const listPerons = [
    {
      fullname : "sofiene mbarek",
      bio : "age 19",
      profession : "pilot",
    },
    {
      fullname : "ahmed tritar",
      bio : "age 16 years old",
      profession :"taxi driver",
    },
    {
      fullname :" mohamed foued salama",
      bio :"age 25 years old ",
      profession :"software",
    },
    {
      fullname : "sofiene mbarek",
      bio : "age 19",
      profession : "pilot",
    },
    {
      fullname : "ahmed tritar",
      bio : "age 16 years old",
      profession :"taxi driver",
    },
    {
      fullname :" mohamed foued salama",
      bio :"age 25 years old ",
      profession :"software",
    },
  ]
  return (
    <div className="app">
      {listPerons.map(el => <List person={el} />)}
    </div>
  );
}

export default App;
