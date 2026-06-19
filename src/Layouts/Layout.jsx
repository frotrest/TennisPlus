import React, { Suspense } from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import Loader from '../components/Loader/Loader';
import styles from './layout.module.css';
import clsx from 'clsx';

const Layout = () => {
  return (
    <div className={clsx(styles.wrapper)}>
      <Header />
      <main className={clsx(styles.main)}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
