import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="mx-4">{children}</div>
    </div>
  );
};

export default Layout;
