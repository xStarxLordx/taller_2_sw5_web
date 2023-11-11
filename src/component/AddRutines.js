import React, { useContext } from "react";
import { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import { FirebaseContext } from "../firebase";
import * as Yup from 'yup'
import { FIREBASE_DB } from "../firebase";


function AddRutines() {
  const { firebase } = useContext(FirebaseContext);

  const [purpose, setPurpose] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const formik = useFormik({
    initialValues:{
      objetive:'',
      description: '',
      category:''
    },
    validationSchema: Yup.object({
      objetive: Yup.string()
                  .min(10,'The objetive must have at least 10 characters')
                  .required('The objetive is required'),
      description: Yup.string()
                  .min(10,'The description must have at least 10 characters')
                  .required('The description is required'),
      category: Yup.string()
                      .required('The category is required')
    }),

  onSubmit: rutine => {
    try {
      console.log(rutine)
      FIREBASE_DB.db.collection("rutines").add(rutine);
      
      console.log(rutine)
    } catch (e) {
      console.log(e);
    }
  }
})
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className=" w-full max-w-3xl content-center">
          <h1 className=" text-black m-4 font-bold text-5xl text-center mb-10">
            New Training
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <h1 className=" text-black text-left m-4 font-light text-3xl"></h1>
            <div className=" mb-10">
              <label
                className=" block text-gray-900 text-2xl font-bold mb-2"
                htmlFor="objetive"
              >
                Training objetive:
              </label>
              <input
                className=" shadow appearance-none border rounded w-full py-2 text-black leading-tight focus:outline-none "
                type="text"
                id="objetive"
                placeholder="Objetive"
                onChange={formik.handleChange}
                value={formik.values.objetive}
                onBlur={formik.handleBlur}
                
              />
            </div>
            { formik.touched.objetive && formik.errors.objetive ? (
                <div>
                  <p className=" font-bold text-red-600"> ERROR: </p>
                  <p> {formik.errors.objetive} </p>
                </div>
            ): null}
            <div className=" mb-10">
              <h1 className=" text-black text-left m-4 font-light text-3xl"></h1>
              <label
                className=" block text-gray-900 text-2xl font-bold mb-2"
                htmlFor="description"
              >
                Description:
              </label>
              <textarea
                className=" shadow appearance-none border rounded w-full py-2 text-black leading-tight focus:outline-none h-40"
                id="description"
                placeholder="Description"
                onChange={formik.handleChange}
                value={formik.values.description}
                onBlur={formik.handleBlur}
                required
              />
            </div>
            { formik.touched.description && formik.errors.description ? (
                <div>
                  <p className=" font-bold text-red-600"> ERROR: </p>
                  <p> {formik.errors.description} </p>
                </div>
            ): null}
            <div className=" mb-4">
              <label
                className=" block text-gray-900 text-2xl font-bold mb-2"
                htmlFor="category"
              >
                Category:
              </label>
              <select name="category" className=" shadow appearance-none border rounded w-full py-2 text-black leading-tight focus:outline-none " 
                      value={formik.values.category}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}>
                <option value="Arms" >
                  Arms
                </option>
                <option value="Legs" >
                  Legs
                </option>
                <option value="Back" >
                  Back
                </option>
                <option value="Abs" >
                  Abs
                </option>
              </select>
            </div>
            { formik.touched.category && formik.errors.category ? (
                <div>
                  <p className=" font-bold text-red-600"> ERROR: </p>
                  <p> {formik.errors.category} </p>
                </div>
            ): null}
            <button
              className=" bg-gray-800 hover:bg-gray-900 w-60 mt-5 p-2 text-white uppercase font-bold "
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddRutines;
