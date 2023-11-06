//import Login from './Components/Login';
import './App.css';
import AdminHome from './Components/AdminHome';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherLogin from './Components/TeacherLogin';
import TeacherHome from './Components/TeacherHome';
function App() {
  return (
    <div className="App">
      <Appoitment />
    </div>
  );
}

export default App;
