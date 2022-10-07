import React from "react";

import Free from "../assets/Free.png";
import group1 from "../assets/Group-1.png";
import group2 from "../assets/Group-2.png";
import group3 from "../assets/Group-3.png";

const Plans = () => {
  return (
    <div className="bg-[#F6F6F6] py-6">
      <p className="text-center font-bold text-2xl cursor-default">
        Choose Your Plan
      </p>
      <p className="text-center mt-3 text-gray-700 cursor-default">
        Let's choose the package that is best for you and explore it happily{" "}
        <br /> and cheerfully.
      </p>
      <div className="container grid grid-cols-3 space-x-8 mx-auto">
        <div className="mt-6 border border-[#DDDDDD] bg-white">
          <img src={Free} alt="free" className="ml-[140px] mt-[90px]" />
          <h3 className="ml-[180px] font-bold mt-[30px] cursor-default">
            Free Plan
          </h3>
          <img src={group1} alt="grp1" className="mt-8 ml-[110px]" />
          <p className="font-bold mt-[120px] ml-[180px] text-xl cursor-default">
            Free
          </p>
          <button className="mt-5 ml-[120px] mb-4 rounded-full py-2 px-16 border border-red-500 text-red-500 font-bold">
            Select
          </button>
        </div>
        <div className="mt-6 border border-[#DDDDDD] bg-white">
          <img src={Free} alt="free" className="ml-[140px] mt-[90px]" />
          <h3 className="ml-[160px] font-bold mt-[30px] cursor-default">
            Standard Plan
          </h3>
          <img src={group2} alt="grp2" className="mt-8 ml-[110px]" />
          <p className="font-bold mt-[80px] ml-[180px] text-xl cursor-default">
            $9 / mo
          </p>
          <button className="mt-5 ml-[120px] mb-4 rounded-full py-2 px-16 border border-red-500 text-red-500 font-bold">
            Select
          </button>
        </div>
        <div className="mt-6 border border-[#F53838] bg-white">
          <img src={Free} alt="free" className="ml-[140px] mt-[90px]" />
          <h3 className="ml-[160px] font-bold mt-[30px] cursor-default">
            Premium Plan
          </h3>
          <img src={group3} alt="grp3" className="mt-8 ml-[110px]" />
          <p className="font-bold mt-[40px] ml-[180px] text-xl cursor-default">
            $12 / mo
          </p>
          <button className="mt-5 ml-[140px] mb-4 rounded-full py-2 px-16 border border-red-500 bg-red-500 text-white font-bold">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
