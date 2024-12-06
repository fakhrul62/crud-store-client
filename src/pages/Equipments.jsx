import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Equipments = () => {
  const allProducts = useLoaderData();
  return (
    <div className="">
      <div className="bg-zinc-100 py-10">
        <div className="w-10/12 mx-auto">
          <h1 className="font-logo text-3xl">All Equipments</h1>
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
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allProducts.map((product, index) => (
                <tr className="*:text-base">
                  <th>{index + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td><span className="text-mongo">$</span>{product.price}</td>
                  <td className="text-center">
                    <Link to={`/details/${product._id}`}>
                      <button
                        className="hover:bg-sky-100 bg-white border hover:border-sky-600 border-zinc-700 px-5 py-1 text-zinc-900 hover:text-sky-600 font-body rounded"
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
