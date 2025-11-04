import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [secretpin, setSecretpin] = useState("");
  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");

  const data = {
    email,
    password,
    confirmPassword,
    phone,
    secretpin,
    firstname,
    lastname,
  };

  const Senddata = async () => {
    const respons = await fetch("https://todo-backend1-s4y6.onrender.com/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await respons.json();
    console.log("result", result);
    if (result.status === 201) {
      alert("Registration successful");
      navigate("/");
    } else {
      alert("Registration failed: " + result.detail);
      console.error("Registration error:", result.detail);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 via-pink-400 to-orange-500">
      <nav className="flex justify-center items-center p-4 text-white">
        <ul className="flex justify-around w-full max-w-4xl">
          <li>
            <a href="#" className="font-bold hover:text-blue-500">
              Home
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
          Welcome, kindly register to save your To-Do
        </h1>
      </div>

      <div className="flex flex-col items-center w-[400px] min-h-[500px] p-4 bg-white shadow-2xl rounded-lg mx-auto mt-12">
        <h1 className="text-3xl font-bold mb-2">Register</h1>

        <div className="w-full mt-2">
          <label htmlFor="firstname">First Name:</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="firstname"
            placeholder="Enter your first name"
            className="w-full outline-none rounded-[8px] border border-gray-400 h-10 px-3"
          />
        </div>

        <div className="w-full mt-4">
          <label htmlFor="lastname">Last Name:</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastname"
            placeholder="Enter your last name"
            className="w-full outline-none rounded-[8px] border border-gray-400 h-10 px-3"
          />
        </div>

        <div className="w-full mt-4">
          <label htmlFor="phone">Phone Number:</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full outline-none rounded-[8px] border border-gray-400 h-10 px-3"
          />
        </div>

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
          <label htmlFor="secret">Secret Number:</label>
          <input
            onChange={(e) => setSecretpin(e.target.value)}
            type="password"
            name="secretpin"
            placeholder="Enter your secret number"
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

        <div className="w-full mt-4">
          <label htmlFor="confirmpassword">Confirm Your Password:</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="w-full outline-none rounded-[8px] border border-gray-400 h-10 px-3"
          />
        </div>

        <button
          onClick={Senddata}
          className="w-full bg-blue-600 cursor-pointer text-white h-10 mt-4 rounded-lg hover:bg-orange-500 transition duration-300"
        >
          Register
        </button>

        <p className="mt-4">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-blue-600 font-bold hover:text-orange-500"
          >
            Log in
          </Link>
        </p>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Register;

