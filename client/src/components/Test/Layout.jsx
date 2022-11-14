import React from 'react';
import { Link } from 'react-router-dom';

import classNames from './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Link to="/">
        <h1>Header</h1>
      </Link>
      <div className={classNames.background}>{children}</div>
      <div className={classNames.bottom}>
        <p>
          <Link to="/Home">by Masterminds@Bhavna</Link>
        </p>
      </div>
    </div>
  );
};

export default Layout;
