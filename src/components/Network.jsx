import React from "react";

import Global from "../assets/Global.png";
import Sponsored from "../assets/Sponsored.png";

const Network = () => {
  return (
    <div className="py-14">
      <p className="text-center font-bold text-2xl cursor-default">
        Huge Global Network <br /> of Fast VPN
      </p>
      <p className="text-center text-gray-500 mt-4 cursor-default">
        See <span className="text-gray-500 font-bold">LaslesVPN</span>{" "}
        everywhere to make it easier for you when you move <br />
        locations.
      </p>
      <img src={Global} alt="global" className="ml-[190px] mt-[155px]" />
      <img src={Sponsored} alt="spn" className="ml-[100px] mt-5" />
    </div>
  );
};

export default Network;
