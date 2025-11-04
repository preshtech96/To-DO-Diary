import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = { email, password };

    const response = await fetch("https://todo-backend1-s4y6.onrender.com/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);

    if (result.status === 200) {
      alert("Login successful");
      navigate("/secret", { state: { data: result } });
    } else {
      alert("Login failed: " + result.detail);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 via-pink-400 to-orange-500">
      <nav className="flex justify-center items-center p-4 text-white">
        <ul className="flex justify-around w-full max-w-4xl">
          <li>
            <a href="#" className="font-bold hover:text-blue-500">
              Update
            </a>
          </li>
          <li>
            <a href="#" className="font-bold hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="font-bold hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center items-center h-24 bg-white/30 backdrop-blur-sm text-white">
        <h1 className="text-3xl font-bold drop-shadow-lg">
          Welcome, kindly sign in to your To-Do
        </h1>
      </div>

      <div className="flex flex-col items-center w-[400px] h-80 p-4 bg-white shadow-2xl rounded-lg mx-auto mt-12">
        <h1 className="text-3xl font-bold">Log in</h1>

        <div className="w-full mt-4">
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full outline-none rounded-[8px] border border-gray-400 h-10 px-3"
          />
        </div>

        <div className="w-full mt-4">
          <label htmlFor="password">Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full outline-none rounded-[8px] border border-gray-400 h-10 px-3"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 cursor-pointer text-white h-10 mt-4 rounded-lg hover:bg-orange-500 transition duration-300"
        >
          Log in
        </button>

        <p className="mt-4">
          Don't have an account?{" "}
          <a
            href="/Register"
            className="text-blue-600 font-bold hover:text-orange-500"
          >
            Sign up
          </a>
        </p>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
