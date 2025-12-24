"use client";

import React, { useState } from "react";

type Props = {
  show: boolean;
  onClose: () => void;
};

type User = {
  username: string;
  password: string;
};

const AuthModal = ({ show, onClose }: Props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  if (!show) return null;

  const handleSignup = () => {
    if (!username || !password) {
      setMessage("Please enter username and password");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find((u: User) => u.username === username);
    if (userExists) {
      setMessage("User already exists!");
      return;
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    setMessage("Signup successful! You can login now.");
    setIsLogin(true);
    setUsername("");
    setPassword("");
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: User) => u.username === username && u.password === password
    );
    if (user) {
      setMessage("Login successful!");
      onClose();
    } else {
      setMessage("Invalid username or password");
    }
  };

  const handleForgotPassword = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: User) => u.username === username);
    if (user) {
      alert(`Your password is: ${user.password}`);
    } else {
      alert("User not found");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-[10000] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
      <div className="relative w-[90%] max-w-md p-8 rounded-2xlvbackdrop-blur-lg bg-white/20 shadow-2xl animate-float">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 px-4 py-3 rounded-lg bg-white/80 focus:bg-white outline-none transition-all duration-300"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 px-4 py-3 rounded-lg bg-white/80 focus:bg-white outline-none transition-all duration-300"
        />

        {message && <p className="text-red-500 mb-2">{message}</p>}

        <button
          onClick={isLogin ? handleLogin : handleSignup}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:scale-105 transition-transform duration-300 mb-2"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {isLogin && (
          <p
            className="text-sm text-blue-600 cursor-pointer mb-2"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </p>
        )}

        <p className="text-sm text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
