import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    
    <div className="md:w-2/6 xl:w-1/5 bg-gray-800">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Restaurant App</p>
 
                <p className="mt-3 text-gray-600">Opciones:</p>
 
                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block hover:bg-gray-400 hover:text-gray-900" activeClassName="text-yellow-500" end to="/home">Home</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-gray-400 hover:text-gray-900" activeClassName="text-yellow-500" end to="/plato">Plato</NavLink>
                </nav>

            </div>
        </div>
        
  )
}

export default Sidebar