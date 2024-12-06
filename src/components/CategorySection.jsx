import React from "react";

const CategorySection = () => {
  return (
    <div className="py-20 w-10/12 mx-auto">
      <div>
        <h2 className="font-body font-bold text-black text-3xl text-center my-3">
          All Categories
        </h2>
        <p className="font-body text-black text-center mb-10">
          Find the category that suits you
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5"></div>
    </div>
  );
};

export default CategorySection;
