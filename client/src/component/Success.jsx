/** @format */

import React from "react";
import check from "../image/check.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="w-full mt-20 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <img src={check} alt="success" className="w-[200px] animate-bounce" />
        <p className="font-bold text-green-600 text-xl">Registration Success</p>
        <div className="text-center">
          <p>Thank you for your Registration</p>
          <p>We will contact you as soon as Possible</p>
        </div>
        <Link to={"/"}>
          <Button>Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
