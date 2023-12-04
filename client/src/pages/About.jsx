import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-yellow-700 h-screen text-center">
      <h1 className=" text-black font-extrabold text-center text-[57px]">
        About Us
      </h1>
      <div className="p-4">
        <p className="text-white font-extrabold">
          Welcome to SubinEstate, your premier destination for all things real
          estate! Whether you're buying, selling, or renting, SubinEstate is
          here to simplify your property journey with a seamless online
          experience.
        </p>
      </div>
      <div className=" flex p-9">
        <img
          src="./public/image/about.jpg"
          alt=""
          className="w-[200px] lg:w-[200px] sm:w-[150px] lg:h-[100px] sm:h-[100px]"
        />
        <p className="p-4 text-white font-extrabold">
          Discover a vast array of properties, from cozy homes to luxurious
          estates, all meticulously curated to meet your unique preferences. Our
          user-friendly interface ensures that you can effortlessly navigate
          through our listings, making the search for your dream property a
          breeze.
        </p>
      </div>
      <div className="">
        <p className="text-white font-extrabold">
          SubinEstate is not just a platform; it's your reliable partner in the
          world of real estate. Our team of dedicated professionals is committed
          to providing you with accurate and up-to-date information, guiding you
          through every step of the process. We understand that finding the
          perfect home or investment is a significant decision, and we're here
          to make it as smooth as possible.
        </p>
      </div>

      <div className="text-center mt-6 mx-auto p-2 text-[40px] flex flex-row ">
        <div className="mx-auto flex gap-3">
          <FaFacebook />
          <FaInstagram />
          <p className="text-[30px] font-bold">: SubinEstate</p>
        </div>
      </div>
      <h1 className="text-white font-extrabold">Do contact us on below number</h1>
      <p className="text-black font-bold">9841172075</p>
    </div>
  );
}
