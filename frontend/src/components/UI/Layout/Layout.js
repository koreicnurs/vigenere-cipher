import React from 'react';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import './Layout.css';

const Layout = ({children}) => {
  return (
    <>
      <Toolbar/>
      <main className="Content-Layout">{children}</main>
    </>
  );
};

export default Layout;