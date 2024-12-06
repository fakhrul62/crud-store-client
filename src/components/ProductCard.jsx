import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
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
    <div className="border p-5 rounded-lg shadow-md">
      <img src={photo} className="h-80 w-full object-cover rounded-md" />
      <div className="mt-2">
        <h3 className="font-logo text-lg">{name}</h3>
        <h3 className="font-body text-zinc-600">{category}</h3>
        <div className="flex justify-between">
          <h3 className="font-logo">
            Price: <span className="text-mongo">$</span>
            {price}
          </h3>
          <h3 className="font-logo text-zinc-700 flex items-center">
            <AiTwotoneStar className="text-fireb" />
            {rating}
          </h3>
        </div>
        <div className="flex items-center justify-between mt-3 ">
          <Link to={`/update/${_id}`}>
            <button
              className="hover:bg-[#3cad4548] bg-white border hover:border-mongo border-zinc-700 px-10 py-1 text-zinc-900 hover:text-[#209429] font-body rounded"
              type="button"
            >
              Update
            </button>
          </Link>
          <Link>
            <button
              className="hover:bg-[#f2612048] bg-white border hover:border-fireb border-zinc-700 px-10 py-1 text-zinc-900 hover:text-[#f26120] font-body rounded"
              type="button"
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
