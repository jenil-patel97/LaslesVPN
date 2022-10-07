import React from "react";

import Feature from "../assets/feature.png";
import Check from "../assets/check.png";

const Features = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 py-24 items-center">
      <div>
        <img src={Feature} alt="img" />
      </div>
      <div>
        <p className="text-3xl font-bold">
          We Provide Many <br /> Features You Can Use
        </p>
        <p className="text-gray-700 font-normal mt-6">
          You can explore the features that we provide with fun and <br /> have
          their own functions each feature.
        </p>
        <div className="flex mt-6">
          <img src={Check} alt="check" />
          <p className="ml-3 text-gray-700">Powerfull online protection.</p>
        </div>
        <div className="flex mt-5">
          <img src={Check} alt="check" />
          <p className="ml-3 text-gray-700">Internet without borders.</p>
        </div>
        <div className="flex mt-5">
          <img src={Check} alt="check" />
          <p className="ml-3 text-gray-700">Supercharged VPN</p>
        </div>
        <div className="flex mt-5">
          <img src={Check} alt="check" />
          <p className="ml-3 text-gray-700">No specific time limits.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
