import React from "react";
import logo from "../assets/Logo.png";

import FaceBook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/Twitter.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-20">
      <div className="container mx-auto max-w-5xl flex flex-row  space-x-24 cursor-default">
        <div className="flex-1 space-y-5">
          <img src={logo} alt="logo lasles vpn" className="w-36" />
          <div>
            <span className="font-semibold">LaslesVPN</span> is a private
            virtual network that <br />
            has unique features and has high security.
          </div>
          <div className="flex flex-row">
            <img src={FaceBook} alt="facebook icon" className="w-16 h-16" />
            <img src={Twitter} alt="twitter icon" className="w-16 h-16" />
            <img src={Instagram} alt="IG icon" className="w-16 h-16" />
          </div>
          <div>©2022LaslesVPN</div>
        </div>
        <div className="">
          <div className="text-lg font-bold mb-6">Product</div>
          <ul className="space-y-6 text-base text-gray-500">
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <div className="text-lg font-bold mb-6">Engage</div>
          <ul className="space-y-6  text-base text-gray-500">
            <li>LaslesVPN ? </li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <div className="text-lg font-bold mb-6">Earn Money</div>
          <ul className="space-y-6  text-base text-gray-500">
            <li>Affiliate</li>
            <li>Become Partner</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
