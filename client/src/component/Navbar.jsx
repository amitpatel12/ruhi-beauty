/** @format */

import React from "react";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-pink-100 px-3 shadow-lg border">
      <Link to={"/"}>
        <img src={logo} className="w-[80px] h-[70px]" />
      </Link>
      <p className="font-bold text-pink-700 text-lg">𝓡𝓾𝓱𝓲 𝓑𝓮𝓪𝓾𝓽𝔂 𝓟𝓪𝓵𝓸𝓾𝓻</p>
    </div>
  );
};

export default Navbar;
