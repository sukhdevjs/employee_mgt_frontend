import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import {  getEmployee } from "../services/EmployeeService";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const loadEmployee = async () => {
      const data = await getEmployee(); // Fetch employee data from the API
      setEmployee(data); // Set the employee data in state
    };
    loadEmployee();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white shadow-md rounded px-8 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Employee List</h1>
      <ul className="divide-y divide-gray-200">
        {employee.map((emp) => (
          <li
            key={emp.id}
            className="py-4 px-2 flex justify-between items-center hover:bg-gray-100"
          >
            <div>
              <span>{emp.firstName} {emp.lastName}</span>
              <br />
              <span className="text-sm text-gray-500">{emp.department}</span>
            </div>
            {/* Edit button with Link to the update page */}
            <Link
              to={`/employee/update/${emp.id}`}  // Link to update form
              className="text-blue-500 hover:text-blue-700"
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;








// import React, { useEffect, useState } from "react";
// import { fetchEmployee } from "../services/EmployeeService";
// import { Link } from "react-router-dom";

// const EmployeeList = () => {
//   const [employee, setEmployee] = useState([]);

//   useEffect(() => {
//     const loadEmployee = async () => {
//       const data = await fetchEmployee();
//       setEmployee(data);
//     };
//     loadEmployee();
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto mt-8 bg-white shadow-md rounded px-8 py-6">
//       <h1 className="text-2xl font-bold mb-4 text-center">Employee List</h1>
//       <ul className="divide-y divide-gray-200">
//         {employee.map((emp) => (
//           <li
//             key={emp.id}
//             className="py-4 px-2 flex justify-between items-center hover:bg-gray-100"
//           >
//             <span>{emp.firstName} {emp.lastName}</span>
//             <span>{emp.department}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EmployeeList;
