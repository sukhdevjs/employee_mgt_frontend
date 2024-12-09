import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployeeById, updateEmployee, deleteEmployee } from "../services/EmployeeService";

const UpdateEmployee = () => {
  // Get employee ID from the URL
  const { id } = useParams(); 
  // For to  navigate to another route
  const navigate = useNavigate(); 

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  // For  handle loading state
  const [loading, setLoading] = useState(false); 
  // To display errors
  const [error, setError] = useState(null); 

  // Fetch employee data by ID when the component loads
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeById(id);
        setEmployee(data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setError("Failed to load employee details.");
      }
    };
    fetchEmployee();
  }, [id]);

  // Handle form submission for updating the employee
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(id, employee);
      alert("Employee updated successfully!");
      navigate("/employee-list"); // Redirect to employee list
    } catch (error) {
      alert("Failed to update employee!");
    }
  };

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // Handle delete employee
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (!confirmDelete) return;

    try {
      setLoading(true);
      await deleteEmployee(id);
      alert("Employee deleted successfully!");
      navigate("/employee-list"); // Redirect to employee list after deletion
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Failed to delete employee!");
    } finally {
      setLoading(false);
    }
  };

  if (error) return <p className="text-red-500">{error}</p>; // Show error message if any

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Update Employee</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Update Employee
        </button>
      </form>

      <button
        onClick={handleDelete}
        disabled={loading} // Disable button while loading
        className={`mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-300 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Deleting..." : "Delete Employee"}
      </button>
    </div>
  );
};

export default UpdateEmployee;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";  // To get id from URL
// import { getEmployeeById, updateEmployee } from "../services/EmployeeService";

// const UpdateEmployee = () => {
//   const { id } = useParams();  // Get employee ID from the URL

//   const [employee, setEmployee] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     department: "",
//   });

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const data = await getEmployeeById(id);  // Fetch data by ID
//         setEmployee(data);  // Set employee data
//       } catch (error) {
//         console.error("Error fetching employee data:", error);
//       }
//     };
//     fetchEmployee();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateEmployee(id, employee);  // Update employee by ID
//       alert("Employee updated successfully!");
//       window.location.href = "/employee-list";  // Redirect to Employee List after successful update
//     } catch (error) {
//       alert("Failed to update employee!");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee({ ...employee, [name]: value });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
//       <h1 className="text-2xl font-bold mb-4 text-center">Update Employee</h1>
//       <div className="space-y-4">
//         <input
//           type="text"
//           name="firstName"
//           value={employee.firstName}
//           onChange={handleChange}
//           placeholder="First Name"
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <input
//           type="text"
//           name="lastName"
//           value={employee.lastName}
//           onChange={handleChange}
//           placeholder="Last Name"
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <input
//           type="email"
//           name="email"
//           value={employee.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <input
//           type="text"
//           name="department"
//           value={employee.department}
//           onChange={handleChange}
//           placeholder="Department"
//           className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//       </div>
//       <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
//         Update Employee
//       </button>
//     </form>
//   );
// };

// export default UpdateEmployee;
