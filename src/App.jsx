

import React, { useState } from "react";
import { auth, googleProvider } from "./config/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  // Handle Google Sign-In
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { displayName, email, photoURL } = result.user;
      setUser({ name: displayName, email, photoURL });
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    signOut(auth).then(() => setUser(null));
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-300">
  <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
    {!user ? (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to Google Authentication App
        </h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
          onClick={handleLogin}
        >
          Login with Google
        </button>
      </div>
    ) : (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome, {user.name}!
        </h2>
        <img
          src={user.photoURL}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-600"
        />
        <p className="text-gray-600 mb-4">Email: {user.email}</p>
        <button
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    )}
  </div>
</div>

  
  );
}

export default App;



