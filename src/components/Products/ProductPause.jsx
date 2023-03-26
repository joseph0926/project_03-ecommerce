import React from "react";
import { Link } from "react-router-dom";

import { FaSearch, FaCartPlus } from "react-icons/fa";

const ProductPause = ({ size, id }) => {
  return (
    <div className="h-full flex justify-center items-center gap-6 text-white">
      <FaSearch size={size}></FaSearch>
    </div>
  );
};

export default ProductPause;
