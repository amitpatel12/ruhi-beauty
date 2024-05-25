/** @format */

import React from "react";
import logo from "../image/logo.png";

const Footer = () => {
  return (
    <div className="w-full min-h-[30vw] bg-slate-300 p-5 mt-10 gap-4">
      <div className="flex justify-between">
        <div>
          <img src={logo} className="w-[150px] h-[150px]" />
        </div>
        <div>
          <p>Social Links</p>
          <div>
            <p className="text-blue-700 underline">Facebook</p>
            <p className="text-blue-700 underline">Facebook</p>
            <p className="text-blue-700 underline">Facebook</p>
            <p className="text-blue-700 underline">Facebook</p>
            <p className="text-blue-700 underline">Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
