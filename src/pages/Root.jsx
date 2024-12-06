import { Outlet } from "react-router-dom";
import React from "react";

const Root = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-3xl">HELLOWW</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
