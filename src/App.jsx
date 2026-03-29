import React, { useState } from "react";
import LogIn from "./Login";
import Input from "./Input";

const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function updatChange(event) {
    const { value, name } = event.target;
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="Container">
      <h1>
        Hello, {fullName.fName} {fullName.lName}
      </h1>
      <LogIn />

      <Input
        name="fName"
        onChange={updatChange}
        placeholder="Firstname"
        value={fullName.fName}
      />
      <Input
        name="lName"
        onChange={updatChange}
        placeholder="lastname"
        value={fullName.lName}
      />
      <button type="submit">submit</button>
      <p>
        {currentDate}/{currentMonth}/{currentYear}G.C
      </p>
    </div>
  );
}
export default App;
