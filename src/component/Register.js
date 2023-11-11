import { useRef, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FIREBASE_AUTH } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification, getAuth, User
} from "firebase/auth";

//const [bar,setBar] = useState(false)
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
 const navigate = useNavigate();
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const auth = FIREBASE_AUTH;
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);




  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    try {
      console.log(email, pwd);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        pwd
      );
      sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
        alert("Correo de verificación enviado, por favor verifica el correo para poder iniciar sesión.");
      });
      //console.warn(auth.currentUser.emailVerified)
      console.log(response);
      
      /* navigation.navigate("Home"); */
    } catch (error) {
      console.log(error);
      alert("Correo o contraseña incorrectos.");
    } finally {
      setLoading(false);
      
    }
  
    
    console.log(user, pwd);
  };
  return (
    <>
      <div className="h-screen flex items-center justify-center ">
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="/signin">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          
          <h1 className=" block text-gray-900 text-3xl font-bold mb-2">Register</h1>
          <form onSubmit={handleSubmit}>
            {/* <label htmlFor="name">
              <a className=" block text-gray-900 text-xl font-bold mb-2 mt-10">Full Name:</a>
            </label>
            <input
            className=" shadow appearance-none border rounded w-full py-2 text-black leading-tight focus:outline-none "
              type="text"
              id="name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <label htmlFor="id">
              <a className=" block text-gray-900 text-xl font-bold mb-2 mt-10">ID:</a>
            </label>
            <input
            className=" shadow appearance-none border rounded w-full py-2 text-black leading-tight focus:outline-none "
              type="text"
              id="id"
              autoComplete="off"
              onChange={(e) => setId(e.target.value)}
              value={id}
              required
            /> */}
            <label htmlFor="email">
              <a className=" block text-gray-900 text-xl font-bold mb-2 mt-10">e-mail:</a>
            </label>
            <input
            className=" shadow appearance-none border rounded w-full py-2 text-black leading-tight focus:outline-none "
              type="text"
              id="email"
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            {/* <label htmlFor="username">
              <a className=" block text-gray-900 text-xl font-bold mb-2 mt-10">Username:</a>
              
            </label>
            <input
            className=" shadow appearance-none border rounded w-full py-2 text-black leading-tight focus:outline-none "
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            /> */}
            

            <label htmlFor="password">
              <a className=" block text-gray-900 text-xl font-bold mb-2 mt-10">Password:</a>
              
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
            
            <label htmlFor="confirm_pwd">
              <a className=" block text-gray-900 text-xl font-bold mb-2 mt-10">
                Confirm Password:
              </a>
              
            </label>
            <input
            className=" shadow appearance-none border rounded w-full py-2 text-black leading-tight focus:outline-none "
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            

            <button
              className=" bg-gray-800 hover:bg-gray-900 w-60 mt-5 p-2 text-white uppercase font-bold justify-center"
              type="submit"
              
            >
              Sign Up
            </button>
          </form>
          <p>
            <a className=" text-sm text-gray-950">Already registered?</a>
            <br />
            <span className="line">
              <a href="/signin" className=" text-sm text-gray-950">
                Sign In
              </a>
            </span>
          </p>
        </section>
      )}
      </div>
    </>
  );
};

export default Register;
