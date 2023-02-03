import React, { useEffect } from 'react';
import css from '../Navbar/Navbar.css';
import navbarLogo from '../../assests/story-tracker.jpg';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import jwt_Decode from 'jwt-decode';
import con from '../constants';
import axios from 'axios';
import Cookies from 'universal-cookie';

const Navbar = ({ logoutFunction, userToken, authSuccess, authorizeUser }) => {
  const decoded_token = jwt_Decode(userToken);
  console.log(decoded_token);
  console.log(authSuccess);
  let Emp_name = '';
  let Emp_id = '';
  let Emp_firstname = '';
  console.log(userToken);
  if (userToken)
    //const decoded_token = jwt_Decode(userToken);
    console.log(decoded_token);
  Emp_name = decoded_token.Emp_name;
  Emp_id = decoded_token.Emp_id;
  Emp_firstname = decoded_token.Emp_firstname;

  console.log(Emp_firstname);

  useEffect(() => {
    if (userToken) {
      console.log(userToken);
      authorizeUser(userToken);
    }
  }, [userToken]);

  return (
    <div className={css.Navbar}>
      <nav className={css.NavbarItems}>
        <div className={css.Left_Navbar_Headings}>
          <NavLink to="/">
            <img className={css.logoImage} src={navbarLogo} alt="logo"></img>
          </NavLink>

          <h3 className={css.navbarBrand}>
            <NavLink to="/">
              {con.Story} {con.Tracker}
            </NavLink>
          </h3>

          {authSuccess === true ? (
            <div className="login-navlink">
              <div className={css.headings}>
                <NavLink to="/Table">{con.Dashboard}</NavLink>
              </div>
              <div className={css.headings}>
                <NavLink to="/CodeReview">
                  {con.Code} {con.Review}
                </NavLink>
              </div>
              <div className={css.headings}>
                <NavLink to="/Reports">{con.Reports}</NavLink>
              </div>
              <div className={css.right_navbarHeadings}>
                <div className={css.headings}>
                  <AccountCircleIcon />
                  <span>
                    {con.Hi}, {Emp_firstname}
                  </span>
                </div>
                <div className={css.headings}>
                  <NavLink
                    to="/"
                    onClick={() => {
                      logoutFunction(Emp_id);
                    }}
                  >
                    {con.Logout}
                  </NavLink>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
