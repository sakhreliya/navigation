import { Route, Routes } from "react-router-dom";
// import "./App.css";
import { adminNav } from "./Admin/Header/adminNav";
import Home from "./Admin/Pages/Home";
import List from "./Admin/Pages/List";


import Login from "./Atoms/Body/Login";
import Navbar from "./Atoms/Body/Header/Navbar";
import Not from "./Atoms/Not";


import { userNav } from "./User/Header/useNav";
import UserHome from "./User/Header/Pages/Home";
import Product from "./User/Header/Pages/Product";
import { useEffect, useState } from "react";


function App() {
  const role = "admin";

  if (role === "admin") {
    return (
      <>
        <Navbar data={adminNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </>
    );
  } else if (role === "user") {
    return (
      <>
        <Navbar data={userNav} />
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </>
    );
  } else {
    return <Login />;
  }
}

export default App;
