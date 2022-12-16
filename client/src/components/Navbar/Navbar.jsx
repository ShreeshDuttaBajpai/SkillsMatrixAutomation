import React from 'react';
import css from '../Navbar/Navbar.css';
import navbarLogo from '../../assests/story-tracker.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth.context';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import jwt_Decode from 'jwt-decode';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';

const Navbar = () => {
  const { authSuccess, userToken, logout, run } = useAuth();
  let Emp_name = '';
  let Emp_id = '';

  // const navigate = useNavigate();

  if (userToken) {
    const decoded_token = jwt_Decode(userToken);
    Emp_name = decoded_token.Emp_name;
    Emp_id = decoded_token.Emp_id;
  }

  return (
    <div className={css.Navbar}>
      <nav className={css.NavbarItems}>
        <div className={css.Left_Navbar_Headings}>
          <NavLink to="/">
            <img className={css.logoImage} src={navbarLogo} alt="logo"></img>
          </NavLink>

          <h3 className={css.navbarBrand}>
            <NavLink to="/Home">Story Tracker</NavLink>
          </h3>

          <div className={css.headings}>
            <NavLink to="/Home">Home</NavLink>
          </div>
          {authSuccess === true ? (
            <div className="login-navlink">
              <div className={css.headings}>
                <NavLink to="/Table">Dashboard</NavLink>
              </div>
              <div className={css.headings}>
                <NavLink to="/codereview">Code Review</NavLink>
              </div>
              <div className={css.headings}>
                <NavLink to="/codereview">Reports</NavLink>
              </div>
              <div className={css.right_navbarHeadings}>
                <div className={css.headings}>
                  <AccountCircleIcon />
                  <span>Hi, {Emp_name}</span>
                </div>
                <div className={css.headings}>
                  <NavLink
                    to="/Home"
                    onClick={() => {
                      logout(Emp_id);
                    }}
                  >
                    Logout
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
                Sign In/Sign Up
              </div>
            </div>
          )}
        </div>
        {/* <div className={css.right_navbarHeadings}>
          {authSuccess === true ? (
            <div className="login-navlink">
              <div className={css.headings}>
                <AccountCircleIcon />
                <span>Hi, {Emp_name}</span>
              </div>
              <div className={css.headings}>
                <NavLink
                  to="/Home"
                  onClick={() => {
                    logout(Emp_id);
                  }}
                >
                  Logout
                </NavLink>
              </div>
            </div>
          ) : (
            <div>
              <div className={css.headings} onClick={run}>
                Sign In/Sign Up
              </div>
            </div>
          )}
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
