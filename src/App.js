import React from "react";
import { Routes, Route } from "react-router";
import {FIREBASE, FirebaseContext } from "./firebase";
import Home from "./component/Home";
import SignIn from "./component/SignIn";
import Rutines from "./component/Rutines";
import Sidebar from "./Ui/Sidebar";
import Register from "./component/Register";
import AddRutines from "./component/AddRutines";



function App() {
  

  return (
    <FirebaseContext.Provider value={{
      FIREBASE
    }}>
      <div className="md:flex min-h-screen justify-center">
        
        <Sidebar />
        <div className="md:w-3/5 xl:w-4/5 p-6">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/rutines" element={<Rutines />} />
            <Route path="/addrutines" element={<AddRutines />} />
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
