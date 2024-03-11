import React, { useState } from "react";
import { Card } from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import reviews from "../data";

const Testimonials = (props) => {
  let profiles = props.profiles;

  const [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(profiles.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= profiles.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    setIndex(Math.floor(Math.random() * reviews.length));
  }

  return (
    <div
      className=" w-[85vw] md:w-[700px] bg-white flex flex-col mt-10 p-10 justify-center items-center 
     transition-all duration-700  hover:shadow-xl rounded-md"
    >
      <Card profiles={profiles[index]}></Card>
      <div className=" flex text-3xl mt-9 gap-3 text-violet-400 font-bold">
        <button
          onClick={leftShiftHandler}
          className=" cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button
          onClick={rightShiftHandler}
          className=" cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight></FiChevronRight>
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={surpriseHandler}
          className=" bg-violet-400 hover:bg-violet-500 transition-all duration-200
         cursor-pointer px-10 rounded-md font-bold text-white text-lg"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
