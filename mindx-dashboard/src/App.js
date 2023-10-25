//import Login from './Components/Login';
import './App.css';
import AdminHome from './Components/AdminHome';
import AdminLogin from './Components/AdminLogin';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherLogin from './Components/TeacherLogin';
import TeacherHome from './Components/TeacherHome';
function App() {
  
  return (
      <div className='App'>
        <BrowserRouter>
      <Routes>
         <Route path="/" element={<Dashboard />}></Route>
         <Route path="AdminHome" element={<AdminHome/>} />
         <Route path="AdminLogin" element={<AdminLogin/>} />
         <Route path="TeacherLogin" element={<TeacherLogin/>} />
         <Route path="TeacherHome" element={<TeacherHome/>} />
         </Routes>
         </BrowserRouter>
      </div>
  ); 
  
}

export default App;
