import {
    faLaptopCode,
    faPenToSquare,
    faSitemap
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        category: path === "/category",
        clientScore: path === "/client-score"
    });
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
                title="Client Master"
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
                <FontAwesomeIcon icon={faSitemap} />
            </NavLink>
            <NavLink
                title="Category Master"
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
                <FontAwesomeIcon icon={faLaptopCode} />
            </NavLink>
            <NavLink
                title="Client Expected Score Mapping"
                to="/client-score"
                className={css.sidebarNavItem}
                activeClassName={
                    activeLocation.clientScore ? css.sidebarActiveNavItem : ""
                }
                onClick={() =>
                    handleNavItemClick(
                        activeLocation,
                        setActiveLocation,
                        "clientScore"
                    )
                }
            >
                <FontAwesomeIcon icon={faPenToSquare} />
            </NavLink>
        </div>
    );
};

export default SidebarComponent;
