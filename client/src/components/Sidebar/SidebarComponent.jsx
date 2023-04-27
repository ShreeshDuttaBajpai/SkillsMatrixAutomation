import { faLaptopCode, faSitemap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import React from "react";
import css from "./SidebarComponent.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { handleNavItemClick } from "./SidebarFunctions";
import BhavnaLogo from "../../assets/bhavna-logo.png";

const SidebarComponent = () => {
    const path = window.location.pathname;
    const [activeLocation, setActiveLocation] = useState({
        home: path === "/",
        category: path === "/category"
    });
    fontawesome.library.add(faSitemap, faLaptopCode);
    return (
        <div className={css.sidebarContainerDiv}>
            <div className={css.brandLogoDiv}>
                <img
                    src={BhavnaLogo}
                    alt="Bhavna Corp"
                    className={css.brandLogoImg}
                />
            </div>
            <NavLink
                to="/"
                exact
                className={css.sidebarNavItem}
                activeClassName={
                    activeLocation.home ? css.sidebarActiveNavItem : ""
                }
                onClick={() =>
                    handleNavItemClick(
                        activeLocation,
                        setActiveLocation,
                        "home"
                    )
                }
            >
                <FontAwesomeIcon icon="fa-solid fa-sitemap" />
            </NavLink>
            <NavLink
                to="/category"
                className={css.sidebarNavItem}
                activeClassName={
                    activeLocation.category ? css.sidebarActiveNavItem : ""
                }
                onClick={() =>
                    handleNavItemClick(
                        activeLocation,
                        setActiveLocation,
                        "category"
                    )
                }
            >
                <FontAwesomeIcon icon="fa-solid fa-laptop-code" />
            </NavLink>
        </div>
    );
};

export default SidebarComponent;
