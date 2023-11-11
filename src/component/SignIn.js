import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FIREBASE_AUTH } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  getAuth,
  User,
} from "firebase/auth";
import { Routes, Route, redirect } from "react-router";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignIn = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    setLoading(true);
    
    try {
      const response = await signInWithEmailAndPassword(auth, email, pwd);
      console.log(response);
      //console.warn(auth.currentUser.emailVerified)
      if (auth.currentUser.emailVerified == true) {
        navigate("/home")
      } else {
        alert("Por favor verifica el correo.");
      }
    } catch (error) {
      console.log(error);
      alert("Correo o contraseña incorrectos.");
    } finally {
      setLoading(false);
      
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center ">
        <section>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              <a className=" block text-gray-900 text-2xl font-bold mb-2">
                Email:
              </a>
            </label>
            <input
              className=" shadow appearance-none border rounded w-full py-2 text-black leading-tight focus:outline-none "
              type="text"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />

            <label htmlFor="password">
              <a className=" block text-gray-900 text-2xl font-bold mb-2">
                Password:
              </a>
            </label>
            <input
              className=" shadow appearance-none border rounded w-full py-2 text-black leading-tight focus:outline-none "
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <div className="items-center justify-center">
              <button
                className=" bg-gray-800 hover:bg-gray-900 w-60 mt-5 p-2 text-white uppercase font-bold justify-center"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default SignIn;
