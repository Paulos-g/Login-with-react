import React from "react";
import LogIn from "./Login";
import Input from "./Input";

bool;

function App() {
  return (
    <div className="Container">
      <h1>Hello</h1>
      <LogIn />
      <Input text="text" placeholder="username" />
      <Input text="text" placeholder="password" />
      <button type="submit">Login</button>
    </div>
  );
}
export default App;
