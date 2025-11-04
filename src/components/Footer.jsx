import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import preshtech from "../assets/preshtech.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={preshtech}
              alt="Logo"
              className="w-12 h-12 rounded-full border border-gray-600"
            />
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Pres<span className="text-orange-500">HT</span>ech
            </h2>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Crafting next-generation web solutions that blend creativity and
            functionality. We design, build, and innovate with precision and
            passion.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400 mb-2">
            📧 Email:
            <br />
            <a
              href="mailto:preshtech96@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              preshtech96@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-400 mb-2">
            📞 Phone:
            <br />
            <a
              href="tel:+2348166637301"
              className="hover:text-green-400 transition-colors"
            >
              +234 816 663 7301
            </a>
          </p>
          <p className="text-sm text-gray-400">
            🕒 Working Hours:
            <br />
            Monday – Saturday: 8:00 AM – 6:00 PM <br />
            Sunday: Closed
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Connect</h3>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/preshtech96"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/preshtech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/2348166637301"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-transform transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>

          <a
            href="https://preshtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bold mt-4 underline hover:text-orange-400 transition-colors"
          >
            Visit My Portfolio
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        <p className="mb-1">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-orange-500 font-semibold">Preshtech</span>. All
          Rights Reserved.
        </p>
        <p className="text-xs text-gray-500">
          Fullstack Project{" "}
          <span className="text-orange-500 font-semibold">Preshtech</span> | Powered
          by React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
