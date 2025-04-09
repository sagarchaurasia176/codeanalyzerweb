import React from "react";
// import NavBar from "./Components/NavBar";
import "./App.css";
import HomeComponents from "./Components/HomeComponents";
import { Route, Routes } from "react-router";

// import {Route, Routes } from 'react-dom'
// contribute by raunak , tanmay , sagar
const App = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element = {<HomeComponents/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
