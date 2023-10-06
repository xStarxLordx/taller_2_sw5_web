
import React, { useState } from "react";



import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification, getAuth, User
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();
  
  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      console.warn(auth.currentUser.emailVerified)
      if(auth.currentUser.emailVerified==true){
        navigation.navigate("Home");
      }
      else{
        alert("Por favor verifica el correo.")
      }
    } catch (error) {
      console.log(error);
      alert("Correo o contraseña incorrectos.");
    } finally {
      
      setLoading(false);
      await setEmail("");
      await setPassword("");
    }
  };
  const handleSignUp = async () => {
    setLoading(true);
    
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
        alert("Correo de verificación enviado, por favor verifica el correo para poder iniciar sesión.");
      });
      console.warn(auth.currentUser.emailVerified)
      console.log(response);
      
      /* navigation.navigate("Home"); */
    } catch (error) {
      console.log(error);
      alert("Correo o contraseña incorrectos.");
    } finally {
      setLoading(false);
      await setEmail("");
      await setPassword("");
    }
  };

  return (
    <div style={styles.container}>
     
        
          <p
            style={[styles.title, { marginTop: 70 }, { alignSelf: "center" }]}
          >
            FinanzasApp
          </p>
         
          
          <div style={styles.inpuContainer}>
            <p
              placeholder="Correo electrónico"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Contraseña"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          </div>
          
          <div style={styles.buttonContainer}>
            <button onClick={handleSignIn} style={styles.button}>
              <p style={styles.buttonText}> Iniciar sesión </p>
            </button>
            <button
              onClick={handleSignUp}
              style={[styles.button, styles.buttonOutline]}
            >
              <p style={[styles.buttonOutlineText]}> Registrarse </p>
            </button>
          </div>
         
     
    </div>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",

    backgroundColor: "white",
    flex: 1,
  },
  inpuContainer: {
    width: "80%",
    alignSelf:"center"
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    
  },
  buttonContainer: {
    width: "80%",
    alignSelf:"center"
  },
  button: {
    width: "65%",
    padding: 15,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 15,
    backgroundColor: "#555555",
    borderColor: "black",
    borderWidth: 1,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
  },
  buttonOutlineText: {
    fontWeight: "700",
    color: "black",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  logo: {
    width: "60%",
    alignSelf: "center",
  },
});
