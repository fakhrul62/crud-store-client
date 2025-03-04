import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  //
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //observe onAuth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Observing Current user: ", currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  /**
   * useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      // Optionally fetch additional details if necessary
      await currentUser.reload(); // Ensure the latest user info is fetched
      setUser({ ...currentUser });
      console.log("Observing Current user: ", currentUser);
    }
    setLoading(false);
  });

  return () => {
    unSubscribe();
  };
}, []);

   */
  const userInfo = {
    user,
    loading,
    createUser,
    setUser,
    signInUser,
    logOut,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
