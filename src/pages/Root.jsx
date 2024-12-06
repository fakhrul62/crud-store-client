import { Outlet } from "react-router-dom";
import React from "react";
import Navmenu from "../components/Navmenu";

const Root = () => {
  return (
    <div>
      <Navmenu></Navmenu>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
