import React from "react";
import { Routes, Route } from "react-router";
import Home from "./component/Home"
import SignIn from "./component/SignIn"
import Rutines from "./component/Rutines";
import Sidebar from "./Ui/Sidebar";
import Register from "./component/Register";
import AddRutines from "./component/AddRutines";

function App() {
  return (
    <div className="md:flex min-h-screen text-center text-3xl text-red-700">
    
      <Sidebar/>
      <Routes>
        
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/rutines" element={<Rutines/>} />
        <Route path="/addrutines" element={<AddRutines/>} />
      </Routes>
      
    </div>
  );
}

export default App;
