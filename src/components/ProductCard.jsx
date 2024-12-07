import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ product, allProducts, setAllProducts }) => {
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
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#848489",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/store/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Product has been deleted.",
                icon: "success",
              })
              const remaining = allProducts.filter(cof=>  cof._id !== _id);
              setAllProducts(remaining);
            }
          });
      }
    });
  };
  return (
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
          <Link to={`/update/${_id}`}>
            <button
              className="hover:bg-[#3cad4548]   border hover:border-mongo border-zinc-700 px-10 py-1   hover:text-[#209429] font-body rounded"
              type="button"
            >
              Update
            </button>
          </Link>
          <Link>
            <button onClick={() => handleDelete(_id)}
              className="hover:bg-[#f2612048]   border hover:border-fireb border-zinc-700 px-10 py-1   hover:text-[#f26120] font-body rounded"
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
