import React from 'react'
import { NavLink } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from "../firebase";

function Sidebar1() {


  return (
    
    <div className="md:w-2/6 xl:w-1/5 bg-gray-800">
            <div className="p-6">
                <p className="uppercase text-white text-3xl tracking-wide text-center font-bold">Best Gym</p>
 
                <p className="mt-3 text-gray-600 text-2xl">Options:</p>
                
                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block hover:bg-gray-400 hover:text-gray-900 text-2xl"  end to="/home">Home</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-gray-400 hover:text-gray-900 text-2xl"  end to="/signin">Sign In</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-gray-400 hover:text-gray-900 text-2xl"  end to="/register">Register</NavLink>

                </nav>

            </div>
        </div>
        
  )
}

export default Sidebar1