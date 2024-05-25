/** @format */

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "react-toastify";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await fetch("http://localhost:9000/addRegistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
      if (result.error) {
        toast.error("Try again");
      } else {
        toast.success("Registration Success");
        navigate("/success");
      }
    } catch (error) {
      console.log(error);
      toast.error("Try again");
    }
  };
  return (
    <div>
      <div className="p-3 px-8">
        <div className="grid items-center justify-center">
          <p className="text-lg font-bold">Registration Form</p>
        </div>
        <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              id="name"
              name="name"
              {...register("name", { required: true })}
              placeholder="Enter Full Name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="name">Mobile No.</label>
            <Input
              type="text"
              id="name"
              name="name"
              {...register("mobileNo", { required: true })}
              placeholder="Enter Mobile Number"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="address">Address</label>
            <Input
              type="text"
              id="address"
              name="address"
              {...register("address", { required: true })}
              placeholder="Enter Address"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              id="email"
              name="email"
              {...register("email")}
              placeholder="Enter Address"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="date">Event Date</label>
            <Input
              type="date"
              id="date"
              name="eventDate"
              {...register("eventDate", { required: true })}
              placeholder="Select Date"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Event Timing</label>
            <Controller
              name="eventTime"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  className="!w-full"
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Event Timing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Morning">Morning</SelectItem>
                    <SelectItem value="Afternoon">Afternoon</SelectItem>
                    <SelectItem value="Evening">Evening</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Service For</label>
            <Controller
              name="eventType"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  className="!w-full"
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Service For" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Single">Single</SelectItem>
                    <SelectItem value="Marriage">Marriage</SelectItem>
                    <SelectItem value="Engagement">Engagement</SelectItem>
                    <SelectItem value="Event">Event</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="">
            <Button className="w-full" type="submit">
              Register
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
