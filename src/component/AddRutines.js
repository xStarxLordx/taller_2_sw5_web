import React, { useContext } from "react";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FirebaseContext } from "../firebase";


function AddRutines() {

  const {firebase} = useContext(FirebaseContext); 

  const [purpose, setPurpose] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("");
  const handleSubmit = async rutine => {
    try{
      firebase.db.collection("rutinas").add(rutine)
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <body>
      <section className="flex justify-center mt-10">
        <div >
          <form onSubmit={handleSubmit}>
            <label htmlFor="purpose">
              <a className=" text-white text-xl text-left">Purpose:</a>
            </label>
            <input
              type="text"
              id="purpose"
              onChange={(e) => setPurpose(e.target.value)}
              value={purpose}
              required
            />

            <label htmlFor="description">
              <a className=" text-white text-xl text-start">Description:</a>
            </label>
            <textarea
              
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />

            {/* <label htmlFor="category">
              <a className=" text-white text-xl text-start">Category:</a>
            </label>
            <select name="category" className=" text-black text-sm " >
              <option value="Arms" className=" text-black text-sm">
                Arms
              </option>
              <option value="Legs" className=" text-black text-sm" >
                Legs
              </option>
              <option value="Back" className=" text-black text-sm">
                Back
              </option>
              <option value="Abs" className=" text-black text-sm">
                Abs
              </option>
              
            </select> */}

            <button className=" text-white text-base " type="submit" >Add</button>
          </form>
        </div>
      </section>
    </body>
  );
}

export default AddRutines;
