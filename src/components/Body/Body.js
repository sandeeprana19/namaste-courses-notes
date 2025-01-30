import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Header />
      <div className="pt-28">
        <Outlet />
      </div>
    </>
  );
};

export default Body;
