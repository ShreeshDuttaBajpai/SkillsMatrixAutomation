import React from "react";
import css from "../Navbar/Navbar.css";
import constants from "../constants";

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
