import { useEffect, useState } from "react"
import { fetchEmployee } from "../services/EmployeeService";


const EmployeeList = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() =>{
        const loadEmployee = async () =>{
            const data = await fetchEmployee();
            setEmployee(data);
        };
        loadEmployee();
    }, []);

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employee.map((employee) =>(
                    <li
                    key={employee.id}>
                    {employee.firstName} - {employee.latName} - {employee.department}
                    </li>
                ))}

            </ul>
        </div>
    );

};

export default EmployeeList;