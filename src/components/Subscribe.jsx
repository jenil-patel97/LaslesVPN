import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-5 container mx-auto max-w-5xl bg-white rounded-lg px-12 py-10 flex justify-between">
      <div>
        <p className="font-bold text-3xl mb-4 cursor-default">
          Subscribe Now for <br /> Get Special Features!
        </p>
        <p className="text-[#4F5665] font-medium cursor-default">
          Let's subscribe with us and find the fun.
        </p>
      </div>
      <div>
        <button className="bg-red-500 rounded-xl drop-shadow-3xl text-white px-14 py-4">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
