import React, { useEffect } from 'react';
import css from '../Navbar/Navbar.css';
import navbarLogo from '../../assests/story-tracker.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth.context';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import jwt_Decode from 'jwt-decode';
import con from '../constants';
import axios from 'axios';
import Cookies from 'universal-cookie';

const Navbar = () => {
  const { authSuccess, userToken, myData, logout, continueWithMicrosoft } =
    useAuth();
  let Emp_name = '';
  let Emp_id = '';
  let Emp_firstname = '';

  if (userToken) {
    const decoded_token = jwt_Decode(userToken);
    Emp_name = decoded_token.Emp_name;
    Emp_id = decoded_token.Emp_id;
    Emp_firstname = decoded_token.Emp_firstname;
  }
  useEffect(() => {
    console.log(myData);
    if (myData)
      axios.post('https://localhost:7040/api/Emp', myData).then(res => {
        const token = res.data;
        const cookies = new Cookies();
        cookies.set('my_cookie', token);
        window.location.reload();
      });
  }, [myData]);

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
                onClick={continueWithMicrosoft}
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
