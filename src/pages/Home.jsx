import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      
      
      <div className="flex space-x-4">
        {/* Add Employee Button */}
        <Link to="/add-employee">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Add Employee
          </button>
        </Link>

        {/* Update Employee Button */}
        {/* <Link to="/employee/update/:id">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Update Employee
          </button>
        </Link> */}

        {/* Employee List Button */}
        <Link to="/employee-list">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Employee List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
