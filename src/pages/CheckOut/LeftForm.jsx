import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import paypalImg from "../../assets/paypal.png";
import gpayImg from "../../assets/gpay.png";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
const LeftForm = () => {
  return (
    <div className="w-3/5 flex flex-col px-5">
      <div className="space-y-5">
        <div className="relative p-4 border rounded-md ">
          <h3 className="absolute  -top-[13px] left-1/2 transform -translate-x-1/2 bg-white px-2 ">
            Express checkout
          </h3>
          <div className="flex gap-2">
            <div className="h-7 w-full flex justify-center rounded cursor-pointer bg-yellow-500">
              <img src={paypalImg} alt="" className="h-full py-1" />
            </div>
            <div className="h-7 w-full flex justify-center rounded cursor-pointer bg-black">
              <img src={gpayImg} alt="" className="h-full py-1" />
            </div>
          </div>
        </div>
        <div className="relative border-b">
          <small className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 bg-white">
            OR
          </small>
        </div>
        <div className="">
          <form className="">
            <div className="grid w-full items-center gap-4">
              <div className="flex justify-between items-center">
                <Label className="text-xl">Contact Information</Label>
                <small>
                  Already have an account?{" "}
                  <Link to={"/login"} className="text-blue-600">
                    log in
                  </Link>
                </small>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input
                  id="email"
                  placeholder="Email"
                  className="border rounded-sm"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <small htmlFor="terms">Accept terms and conditions</small>
                </div>
              </div>
              <Label className="text-xl">Shipping Address</Label>
              <div className="flex flex-col space-y-1.5">
                <Select>
                  <SelectTrigger id="framework" className="border h-10">
                    <SelectValue placeholder="Country/Region" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="bangladesh">Bangladesh</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="united-kingdom">
                      United Kingdom
                    </SelectItem>
                    <SelectItem value="India"></SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex justify-between gap-2">
                  <Input
                    id="fname"
                    placeholder="First name"
                    className="border rounded-sm"
                  />
                  <Input
                    id="lname"
                    placeholder="Last name"
                    className="border rounded-sm"
                  />
                </div>
                <Input
                  id="address"
                  placeholder="Address"
                  className="border rounded-sm"
                />
                <Input
                  id="apt"
                  placeholder="Apt/Floor/Suite"
                  className="border rounded-sm"
                />
                <div className="flex justify-between gap-2">
                  <Input
                    id="city"
                    placeholder="City"
                    className="border rounded-sm"
                  />
                  <Select>
                    <SelectTrigger id="framework" className="border h-10">
                      <SelectValue placeholder="Province" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="bangladesh">Bangladesh</SelectItem>
                      <SelectItem value="usa">USA</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="united-kingdom">
                        United Kingdom
                      </SelectItem>
                      <SelectItem value="India"></SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="postal-code"
                    placeholder="Postal Code"
                    className="border rounded-sm"
                  />
                </div>
                <div className="space-y-1">
                  <Input
                    id="phone"
                    placeholder="Phone"
                    className="border rounded-sm"
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <small htmlFor="terms">Text with news and offers</small>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeftForm;
