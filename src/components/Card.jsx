import React from "react";

import location from "../assets/location.png";
import Server from "../assets/Server.png";
import User from "../assets/user.png";

const Card = () => {
  return (
    <div className="container mx-auto bg-white shadow-2xl py-8 px-32 rounded-md  border border-gray-200">
      <div className="grid grid-cols-3 ml-[150px] space-x-6 cursor-default">
        <div className="flex">
          <img src={User} alt="user"/>
          <div className="font-extrabold ml-4 mt-1">
            90+
            <p className="font-normal text-gray-500">Users</p>
          </div>
        </div>

        <div className="flex">
          <img src={location} alt="loc" />
          <div className="font-extrabold ml-4 mt-1">
            30+
            <p className="font-normal text-gray-500">Locations</p>
          </div>
        </div>

        <div className="flex">
          <img src={Server} alt="server" />
          <div className="font-extrabold ml-4 mt-1">
            50+
            <p className="font-normal text-gray-500">Servers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
