import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/hp" element={<HomePage />}/>
          {/* Add more routes here */}
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
