import React from "react";
import css from "../Navbar/Navbar.css";
import constants from "../constants";
import bhavnaLogo from "../../assets/bhavna-logo.png";

const Navbar = () => {
    return (
        <div className={css.Navbar}>
            <nav className={css.NavbarItems}>
                <div className={css.Left_Navbar_Headings}>
                    <h3 className={css.navbarBrand}>{constants.CompanyName}</h3>
                </div>
                <div className={css.companyLogo}>
                    <img className={css.companyLogoImg} src={bhavnaLogo} />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
