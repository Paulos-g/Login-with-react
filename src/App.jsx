import React from "react";
import LogIn from "./Login";
import Input from "./Input";

var isLoggedIn = true;
const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

function App() {
  return (
    <div className="Container">
      {isLoggedIn === true ? (
        <h1>Hello</h1>
      ) : (
        <>
          <LogIn />
          <Input text="text" placeholder="username" />
          <Input text="text" placeholder="password" />
          <button type="submit">Login</button>
          <p>
            {currentDate}/{currentMonth}/{currentYear}G.C
          </p>
        </>
      )}
    </div>
  );
}
export default App;
