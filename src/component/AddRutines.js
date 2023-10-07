import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddRutines() {
  const [purpose, setPurpose] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("");
  return (
    <body>
      <section>
        <form>
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
          <input
            type="text"
            id="description"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required
          />

          <label htmlFor="category">
            <a className=" text-white text-xl text-start">Category:</a>
          </label>
          <select name = "category" className=" text-black text-sm ">
              <option value = "Cardio" className=" text-black text-sm">Cardio</option>
              <option value = "Muscles" className=" text-black text-sm">Muscles</option>
          </select>
          

          <button className=" text-white text-base ">Add</button>
        </form>
      </section>
    </body>
  );
}

export default AddRutines;
