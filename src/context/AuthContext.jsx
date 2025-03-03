import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Buat context
const UserContext = createContext();

// Provider yang membungkus seluruh aplikasi
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // kode dibawah ini bisa dilihat di dokumentasi resmi firebase bagian authentication
  const signUp = async (email, password) => {
    try {
      // Tunggu proses pembuatan akun selesai
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Simpan data pengguna di Firestore
      await setDoc(doc(db, "users", email), {
        watchList: [],
      });

      return user;
    } catch (error) {
      console.error("Error saat signup:", error);
      throw error; // Dilempar ke SignUp.jsx agar bisa ditampilkan sebagai error message
    }
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ signUp, signIn, logout, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthContextProvider;

// Custom hook agar lebih mudah digunakan di komponen lain
export const UserAuth = () => {
  return useContext(UserContext);
};
