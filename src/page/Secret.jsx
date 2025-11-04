import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Secret = () => {
  const navigate = useNavigate();
  const [secretpin, setSecretpin] = useState("");
  const id = useLocation().state;
  const handleSecret = async () => {
    const data = {
      secretpin: secretpin,
      id: id.data.user1._id,
    };

    console.log(data);

    const response = await fetch("https://todo-backend1-s4y6.onrender.com/Secret", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("donereeeee", data);
    if (result.status === 200) {
      alert("Login successful");
      navigate("/dashboard", { state: id });
    } else {
      alert("Login failed: " + result.detail);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <nav className="w-full flex justify-center bg-blue-900 p-4 text-white shadow-md">
        <ul className="flex justify-around w-full max-w-4xl">
          <li>
            <a href="#" className="font-bold hover:text-orange-500">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="font-bold hover:text-orange-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="font-bold hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Redirecting you to your Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Please enter your Secret PIN to continue
        </p>
      </div>

      <div className="mt-10 w-[350px] bg-white rounded-2xl shadow-2xl p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <div className="w-full">
          <label
            htmlFor="secretPin"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Your Secret PIN
          </label>
          <input
            onChange={(e) => setSecretpin(e.target.value)}
            type="password"
            name="secretpin"
            placeholder="Enter your secret PIN"
            className="w-full outline-none rounded-md border border-gray-400 h-10 px-3 focus:border-blue-600"
          />
        </div>
        <button
          onClick={handleSecret}
          className="w-full bg-blue-600 text-white h-10 mt-6 rounded-md cursor-pointer font-medium hover:bg-orange-500 transition-colors"
        >
          Access Dashboard
        </button>
        <p className="mt-4">
          Can't receive code ?{" "}
          <a href="/Register" className="text-blue-600 font-bold hover:text-orange-500">
            Sign up
          </a>
        </p>
      </div>
      
    </div>
  );
};

export default Secret;
