import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BiSortAlt2 } from "react-icons/bi";

const Equipments = () => {
  const allProducts = useLoaderData();
  const [products, setProducts] = useState(allProducts); // State for products
  const [isAscending, setIsAscending] = useState(true); // State for sorting order

  // Toggle sort logic
  const toggleSortOrder = () => {
    const sorted = [...products].sort((a, b) =>
      isAscending ? b.price - a.price : a.price - b.price
    );
    setProducts(sorted);
    setIsAscending(!isAscending);
  };

  return (
    <div className="">
      <div className="py-10">
        <div className="w-10/12 mx-auto flex justify-between items-center">
          <h1 className="font-logo text-3xl">All Equipments</h1>
          <div>
            <button onClick={toggleSortOrder} className="btn">
              <BiSortAlt2 />
              {isAscending ? " High to Low" : " Low to High"}
            </button>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto my-10">
        <div className="overflow-x-auto">
          <table className="table font-body">
            {/* head */}
            <thead>
              <tr className="*:text-lg">
                <th>No.</th>
                <th>Name</th>
                <th>Category</th>
                <th>Added By</th>
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {products.map((product, index) => (
                <tr key={product._id} className="*:text-base">
                  <th>{index + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.user}</td>
                  <td>
                    <span className="text-mongo">$</span>
                    {product.price}
                  </td>
                  <td className="text-center">
                    <Link to={`/details/${product._id}`}>
                      <button
                        className="hover:bg-sky-100 border hover:border-sky-600 border-zinc-700 px-5 py-1 hover:text-sky-600 font-body rounded"
                        type="button"
                      >
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
