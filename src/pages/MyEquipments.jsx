import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const MyEquipments = () => {
  const { user } = useContext(AuthContext);
  const loadedAllProducts = useLoaderData();
  const [allProducts, setAllProducts] = useState(loadedAllProducts);

  const myProducts = allProducts.filter((prod) => prod.email === user.email);
  return (
    <div>
      <div className="  py-10">
        <div className="w-10/12 mx-auto">
          <h1 className="font-logo text-3xl">My Equipments</h1>
        </div>
      </div>
      <div className="w-10/12 mx-auto my-10 grid md:grid-cols-3 gap-5">
        {myProducts.map((product) => (
          <ProductCard key={product._id} product={product} allProducts={allProducts} setAllProducts={setAllProducts}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyEquipments;
