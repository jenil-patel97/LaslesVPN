import React from "react";
import Illustarion from "../assets/Illustration.png";

const Main = () => {
  return (
    <div className="container max-w-5xl mx-auto grid grid-cols-2 py-[150px]">
      <div>
        <h1 className="font-bold text-4xl pb-5 cursor-default">
            Want anything to be easy
            <br />
            with LaslesVPN.
        </h1>
        <p className="font-normal text-base text-gray-500 pb-12 cursor-default">
          Provide a network for all your needs with ease and fun using LaslesVPN <br />
          discover interesting features from us.
        </p>
        <button className="py-4 px-16 bg-red-500 rounded-md text-white font-semibold drop-shadow-3xl">
            Get Started
        </button>
      </div>
      <div>
        <img src={Illustarion} alt="main" />
      </div>
    </div>
  );
};

export default Main;
