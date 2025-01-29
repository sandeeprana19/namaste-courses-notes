import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Header />
      <div className="pt-24">
        <Outlet />
      </div>
    </>
  );
};

export default Body;
