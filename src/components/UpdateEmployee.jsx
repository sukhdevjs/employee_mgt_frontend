import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // To get id from URL
import { getEmployeeById, updateEmployee } from "../services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();  // Get employee ID from the URL

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeById(id);  // Fetch data by ID
        setEmployee(data);  // Set employee data
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(id, employee);  // Update employee by ID
      alert("Employee updated successfully!");
      window.location.href = "/employee-list";  // Redirect to Employee List after successful update
    } catch (error) {
      alert("Failed to update employee!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Update Employee</h1>
      <div className="space-y-4">
        <input
          type="text"
          name="firstName"
          value={employee.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="lastName"
          value={employee.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          placeholder="Department"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
        Update Employee
      </button>
    </form>
  );
};

export default UpdateEmployee;
