import Image from "next/image";
import React from "react";

const Nabar = () => {
  return (
    <div className="capitalize w-full h-[7vw] ">
      <div className="flex flex-col w-full">
        <ul className="flex justify-end items-center ">
          <li className="p-4">Mon-Fri: 8am to 2pm</li>
          <li className="p-4">Mon-Fri: 8am to 2pm</li>
          <li className="p-4">Mon-Fri: 8am to 2pm</li>
        </ul>
        <div className=" flex justify-between items-center w-full">
          <div>
            <Image src="/img/logo.png" alt="logo" width={100} height={100} />
          </div>
          <ul className="flex items-center">
            <li className="">home</li>
            <li className="">home</li>
            <li className="">home</li>
            <li className="">home</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nabar;
