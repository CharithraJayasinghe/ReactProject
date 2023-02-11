import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpList from './components/EmployeeList';
import EmpCreate from './components/EmployeeCreate';
import DepartmentList from './components/Department';
import EmpDetails from './components/EmployeeDetails';
import EmpEdit from './components/EmployeeEdit';


function App() {
  return (
    
    <div className="App">
      <b><h2>Welcome to Human Resource Department</h2></b>
      <div className="bg"></div>
      
      
      <BrowserRouter>
        <Routes>
          <Route path='/'                        element={<EmpList />} ></Route>
           <Route path='/employee/create'         element={<EmpCreate />}></Route>
           <Route path='/Department'             element={<DepartmentList />}></Route>
           <Route path='/employee/detail/:empNo'  element={<EmpDetails />}> </Route>
           <Route path='/employee/edit/:empNo'    element={<EmpEdit />}> </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
