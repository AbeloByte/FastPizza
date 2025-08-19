import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./loader";

const AppLayout = () => {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";
  return (
    <>
      {isLoading && <Loader />}
      <div className="layout">
        <Header />
        <main>
          <Outlet />
        </main>

        {/* <Footer/> */}

        <CartOverview />
      </div>
    </> 
  );
};

export default AppLayout;
