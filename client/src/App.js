import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import Teachers from "./pages/Teachers";

const App = () => {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
