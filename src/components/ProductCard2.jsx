import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard2 = ({ product }) => {
  const {
    _id,
    name,
    category,
    price,
    rating,
    customization,
    processing,
    user,
    email,
    photo,
    description,
  } = product;
  return (
    <div>
      <div className="border p-5 rounded-lg shadow-md">
        <img src={photo} className="h-80 w-full object-cover rounded-md" />
        <div className="mt-2">
          <h3 className="font-logo text-lg">{name}</h3>
          <h3 className="font-body  ">{category}</h3>
          <div className="flex justify-between">
            <h3 className="font-logo">
              Price: <span className="text-mongo">$</span>
              {price}
            </h3>
            <h3 className="font-logo   flex items-center">
              <AiTwotoneStar className="text-fireb" />
              {rating}
            </h3>
          </div>
          <div className="flex items-center justify-between mt-3 ">
          <Link to={`/details/${_id}`}>
                      <button
                        className="hover:bg-sky-100   border hover:border-sky-600 border-zinc-700 px-5 py-1   hover:text-sky-600 font-body rounded"
                        type="button"
                      >
                        View Details
                      </button>
                    </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
