import React from "react";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ rate, count }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rate > number ? (
          <BsStarFill />
        ) : rate > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className="flex first-letter:items-center mb-2">
      <div className="text-[#ffb900] text-base mr-1">{tempStars}</div>
      <p className="ml-2 mb-0">({count} 명 리뷰)</p>
    </div>
  );
};

export default Stars;
