import React from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "../Pages/Feed";
import Create from "../Pages/Create";
import People from "../Pages/People";
import Home from "../Pages/Home";
import { Bio } from "./Bio";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/feed" element={<Feed />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/people" element={<People />}></Route>
      <Route path="/bio" element={<Bio />}></Route>
    </Routes>
  );
}

export default Allroutes;
