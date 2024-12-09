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
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6"
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Add Employee</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          value={employee.firstName}
          onChange={(e) =>
            setEmployee({ ...employee, firstName: e.target.value })
          }
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <input
          type="text"
          placeholder="Last Name"
          value={employee.lastName}
          onChange={(e) =>
            setEmployee({ ...employee, lastName: e.target.value })
          }
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Email"
          value={employee.email}
          onChange={(e) =>
            setEmployee({ ...employee, email: e.target.value })
          }
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Department"
          value={employee.department}
          onChange={(e) =>
            setEmployee({ ...employee, department: e.target.value })
          }
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Add Employee
      </button>
    </form>
  );
};

export default AddEmployeeForm;
