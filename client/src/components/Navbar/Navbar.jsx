import React from 'react';
import css from '../Navbar/Navbar.css';
import navbarLogo from '../../assests/story-tracker.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth.context';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import jwt_Decode from 'jwt-decode';
import con from '../constants';

const Navbar = () => {
  const { authSuccess, userToken, logout, run } = useAuth();
  let Emp_name = '';
  let Emp_id = '';
  let Emp_firstname ='';

  if (userToken) {
    const decoded_token = jwt_Decode(userToken);
    Emp_name = decoded_token.Emp_name;
    Emp_id = decoded_token.Emp_id;
    Emp_firstname = decoded_token.Emp_firstname;
  }

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

          {/* <div className={css.headings}>
            <NavLink to="/">{con.Home}</NavLink>
          </div> */}
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
              {/* <div className={css.headings}>
                <NavLink to="/codereview">{con.Reports}</NavLink>
              </div> */}
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
                      logout(Emp_id);
                    }}
                  >
                    {con.Logout}
                  </NavLink>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div
                className={css.right_navbarHeadingsBeforeLogin}
                onClick={run}
              >
                {con.Signin}/{con.SignUp}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
