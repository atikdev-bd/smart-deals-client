import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // state

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user with email and password function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   signin user with email and password function

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signIn with google

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // user sign out function

  const signOutUser = () => {
    return signOut(auth);
  };

  //   user state observer

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        fetch("http://localhost:3000/jwtToken", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after login user", data);
            localStorage.setItem("token", data.token);
          });
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //auth info object
  const authInfo = {
    createUser,
    signInUser,
    user,
    setUser,
    loading,
    setLoading,
    googleSignIn,
    signOutUser,
  };

  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
