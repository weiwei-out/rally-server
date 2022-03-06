//React Imports
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Component Imports
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  //Post
  function userLogin(credentials) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div id="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/login"
            element={<Login userLogin={userLogin} />} //dont forget to pass in props inside {}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// ------
// const [user, setUser] = useState(null);
