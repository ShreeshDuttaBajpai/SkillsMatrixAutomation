import React, { useEffect } from "react";
import css from "../Navbar/Navbar.css";
import navbarLogo from "../../assets/story-tracker.jpg";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import jwt_Decode from "jwt-decode";
import constants from "../constants";
import axios from "axios";
import Cookies from "universal-cookie";
import BhavnaLogo from "../../assets/bhavna-logo.png";

const Navbar = () => {
    return (
        <div className={css.Navbar}>
            <nav className={css.NavbarItems}>
                <div className={css.Left_Navbar_Headings}>
                    <h3 className={css.navbarBrand}>{constants.CompanyName}</h3>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
