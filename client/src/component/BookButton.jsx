/** @format */

import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const BookButton = () => {
  return (
    <div className="fixed bottom-0 w-full flex items-center justify-center shadow-xl h-[60px] bg-pink-200">
      <Link to={"/registration"}>
        <Button className="!py-4 text-xl">Book An Appointment</Button>
      </Link>
    </div>
  );
};

export default BookButton;
