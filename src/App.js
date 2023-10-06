import React from "react";
import { Routes, Route } from "react-router";
import Home from "./component/Home"
import Plato from "./component/Plato"
import Ordenes from "./component/Ordenes";
import Sidebar from "./Ui/Sidebar";
import LoginScreen from "./component/LoginScreen";

function App() {
  return (
    <div className="md:flex min-h-screen text-center text-3xl text-red-700">
    
      <Sidebar/>
      <Routes>
        <Route path="/login"  element={<LoginScreen/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/plato" element={<Plato/>} />
        <Route path="/ordenes" element={<Ordenes/>} />
      </Routes>
      
    </div>
  );
}

export default App;
