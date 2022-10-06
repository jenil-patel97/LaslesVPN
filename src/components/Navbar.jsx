import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-white">
      <header className="container max-w-5xl mx-auto flex flex-row pt-12 items-center space-x-36">
          <img src={Logo} alt="" className="w-36"/>
        <div className="flex-1">
          <ul className="flex flex-row space-x-7 cursor-pointer">
            <li className="hover:font-bold">About</li>
            <li className="hover:font-bold">Features</li>
            <li className="hover:font-bold">Pricing</li>
            <li className="hover:font-bold">Testimonials</li>
            <li className="hover:font-bold">Help</li>
          </ul>
        </div>
        <div className="space-x-6 flex flex-row items-center">
            <button className="font-bold">Log In</button>
            <button className="border border-red-500 rounded-full py-2 px-6 text-black hover:text-red-500 hover:font-bold">Sign Up</button>
            <button></button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
