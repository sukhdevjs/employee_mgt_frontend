import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEmployeeForm from "./components/AddEmployeeForm";
import UpdateEmployee from "./components/UpdateEmployee";
import EmployeeList from "./components/EmployeeList";
// import HeaderLayout from "./components/HeaderLayout.jsx";
import Layout from "./components/HeaderLayout.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout> } />
        <Route path="/add-employee" element={<Layout><AddEmployeeForm /></Layout>} />
        <Route path="/employee/update/:id" element={<Layout><UpdateEmployee /></Layout>} />
        <Route path="/employee-list" element={<Layout><EmployeeList /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
