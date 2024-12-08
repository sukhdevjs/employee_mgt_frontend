import React, { useState } from "react";
import { addEmployee } from "../services/EmployeeService";

const AddEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(employee);
    alert("Employee added successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Employee</h1>
      <input
        type="text"
        placeholder="First Name"
        value={employee.firstName}
        onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={employee.lastName}
        onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={employee.email}
        onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Department"
        value={employee.department}
        onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
