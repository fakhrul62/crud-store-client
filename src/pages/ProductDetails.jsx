import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const allProducts = useLoaderData();
  const product = allProducts.find((prod) => prod._id === id);
  const {
    _id,
    name,
    category,
    price,
    rating,
    customization,
    processing,
    stock,
    user,
    email,
    photo,
    description,
  } = product;
  return (
    <div className="md:p-10">
      <div className=" md:p-10 p-6 rounded-lg shadow-xl md:grid grid-cols-3 gap-10 w-9/12 mx-auto">
        <div className="flex items-center"><img src={photo} className="w-full object-cover rounded-md" /></div>
        <div className="mt-2 col-span-2">
          <h3 className="font-logo text-lg font-bold">{name}</h3>
          <h3 className="font-body   mb-2">Category: {category}</h3>
          <div className="flex gap-3 mb-2">
            <h3 className="font-logo">
              Price: <span className="text-mongo">$</span>
              {price}
            </h3>
            <h3 className="font-logo   flex items-center">
              <AiTwotoneStar className="text-fireb" />
              {rating}
            </h3>
          </div>
          <h3 className="font-logo mb-2"> Customization:  {customization} </h3>
          <h3 className="font-logo mb-2"> Processing Time:  {processing} Hours </h3>
          <h3 className="font-logo mb-2"> QTY:  {stock} </h3>
          <h3 className="font-logo mb-2"> Added By:  {user} : {email} </h3>
          <p className="font-logo"> Description:  <span className=" ">{description}</span> </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
