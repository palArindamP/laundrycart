import Createorder from "./createOrder/createorder";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Createorder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;