import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './loader';

const AppLayout = () => {
  const navigate = useNavigation();
  const isLoading = navigate.state === 'loading';
  return (
    <>
      {isLoading && <Loader />}
      <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-slate-100">
        <Header />
        <div className="my-10 overflow-scroll">
          <main className="mx-auto max-w-3xl">
            <Outlet />
          </main>
        </div>

        {/* <Footer/> */}

        <CartOverview />
      </div>
    </>
  );
};

export default AppLayout;
