import api from "./api";

// import api from './api'; // Import the Axios instance

// Fetch all employees from the backend
export const fetchEmployee = async () => {
  try {
    const response = await api.get("");  // This resolves to GET /api/employee
    return response.data;  // Return the data (list of employees)
  } catch (error) {
    console.error("Error fetching employees:", error.response);
    throw error;
  }
};
// Fetch a single employee by ID
export const fetchEmployeeById = async (id) => {
    try {
      const response = await api.get(`/${id}`);  // This resolves to GET /api/employee/{id}
      return response.data;  // Return the employee data
    } catch (error) {
      console.error(`Error fetching employee with ID ${id}:`, error.response);
      throw error;
    }
  };
  

// export const addEmployee = async() =>{
//     const response = await api.post('/employee');
//     return response.data;
// };

// Add a new employee
export const addEmployee = async (employeeData) => {
    try {
      const response = await api.post("", employeeData);  // This resolves to POST /api/employee
      return response.data;  // Return the added employee data
    } catch (error) {
      console.error("Error adding employee:", error.response);
      throw error;
    }
  };
  
// Update an existing employee by ID
export const updateEmployee = async (id, employeeData) => {
    try {
      const response = await api.put(`/${id}`, employeeData);  // This resolves to PUT /api/employee/{id}
      return response.data;  // Return the updated employee data
    } catch (error) {
      console.error(`Error updating employee with ID ${id}:`, error.response);
      throw error;
    }
  };
  


// export const updateEmployee =async() =>{
//     const response = await api.put('/employee/{id}')
//     return response.data;
// };

// Delete an employee by ID
export const deleteEmployee = async (id) => {
    try {
      await api.delete(`/${id}`);  // This resolves to DELETE /api/employee/{id}
      console.log(`Employee with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting employee with ID ${id}:`, error.response);
      throw error;
    }
  };
  
// export const deleteEmployee = async() =>{
//     const response = await api.delete('/employee/{id}')
//     return response.data;
// };