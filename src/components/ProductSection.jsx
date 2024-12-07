import React, { useEffect, useState } from "react";
import ProductCard2 from "./ProductCard2";

const ProductSection = ({ allProducts }) => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    if(allProducts.length > 6){
      setProducts(allProducts.slice(0, 6));
    }
  }, []);
  return (
    <div className="py-20 w-10/12 mx-auto" id="products">
      <div>
        <h2 className="font-body font-bold   text-3xl text-center my-3">
          Our Products
        </h2>
        <p className="font-body   text-center mb-10">
          Find the equipment that was meant for you
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
        {products.map((product) => (
          <ProductCard2 key={product._id} product={product}></ProductCard2>
        ))}
      </div>
      <div className="my-5 text-center">
        {products.length < 7 && <button onClick={()=>setProducts(allProducts)}
          className="bg-fireb border  px-6 py-2 text-white  font-body rounded"
          type="button"
        >
          View All 
        </button>}
      </div>
    </div>
  );
};

export default ProductSection;
