import { Outlet } from "react-router-dom";
import React from "react";
import Navmenu from "../components/Navmenu";
import FooterSection from "../components/FooterSection";

const Root = () => {
  return (
    <div>
      <Navmenu></Navmenu>
      <Outlet></Outlet>
      <FooterSection></FooterSection>
    </div>
  );
};

export default Root;
