import AddEmployeeForm from "../components/AddEmployeeForm"
import EmployeeList from "../components/EmployeeList"



const Home = () =>{
    return(<div>
        <h1> Employee Management</h1>
        <AddEmployeeForm/>
        <EmployeeList/>
    </div>
    );
};

export default Home;