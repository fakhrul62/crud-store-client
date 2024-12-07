import React from "react";

const CategorySection = () => {
  return (
    <div className="py-20 w-10/12 mx-auto">
      <div>
        <h2 className="font-body font-bold   text-3xl text-center my-3">
          All Categories
        </h2>
        <p className="font-body   text-center mb-10">
          Find the category that suits you
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
        <div className="bg-fireb py-5 rounded-lg">
          <h2 className="font-logo text-white text-2xl text-center">Cardio</h2>
        </div>
        <div className="bg-mongo py-5 rounded-lg">
          <h2 className="font-logo text-white text-2xl text-center">Strength</h2>
        </div>
        <div className="bg-fireb py-5 rounded-lg">
          <h2 className="font-logo text-white text-2xl text-center">Winter Sports</h2>
        </div>
        <div className="bg-mongo py-5 rounded-lg">
          <h2 className="font-logo text-white text-2xl text-center">Combat</h2>
        </div>
        <div className="bg-fireb py-5 rounded-lg">
          <h2 className="font-logo text-white text-2xl text-center">Water Sports</h2>
        </div>
        <div className="bg-mongo py-5 rounded-lg">
          <h2 className="font-logo text-white text-2xl text-center">Athletic </h2>
        </div>
        <div className="bg-fireb py-5 rounded-lg">
          <h2 className="font-logo text-white text-2xl text-center">Outdoor </h2>
        </div>
        <div className="bg-mongo py-5 rounded-lg">
          <h2 className="font-logo text-white text-2xl text-center">Team Sports</h2>
        </div>
        <div className="bg-fireb py-5 rounded-lg">
          <h2 className="font-logo text-white text-2xl text-center">Flexibility </h2>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
