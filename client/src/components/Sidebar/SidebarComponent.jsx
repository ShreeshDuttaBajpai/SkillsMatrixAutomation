import {
    faLaptopCode,
    faPenToSquare,
    faSitemap,
    faTableList,
    faCheck,
    faUsers
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
        clients: path === "/",
        category: path === "/category",
        employee: path === "/employee",
        clientScore: path === "/client-score",
        employeeScore: path === "/employee-score",
        skillMatrix: path === "/skill-matrix"
    });
    return (
        <div className={css.sidebarContainerDiv}>
            <NavLink
                title="Client Master"
                to="/"
                exact
                className={css.sidebarNavItem}
                activeClassName={
                    activeLocation.clients ? css.sidebarActiveNavItem : ""
                }
                onClick={() =>
                    handleNavItemClick(
                        activeLocation,
                        setActiveLocation,
                        "clients"
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
                title="Employee Master"
                to="/employee"
                className={css.sidebarNavItem}
                activeClassName={
                    activeLocation.employee ? css.sidebarActiveNavItem : ""
                }
                onClick={() =>
                    handleNavItemClick(
                        activeLocation,
                        setActiveLocation,
                        "employee"
                    )
                }
            >
                <FontAwesomeIcon icon={faUsers} />
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
            <NavLink
                title="Employee Score Mapping"
                to="/employee-score"
                className={css.sidebarNavItem}
                activeClassName={
                    activeLocation.employeeScore ? css.sidebarActiveNavItem : ""
                }
                onClick={() =>
                    handleNavItemClick(
                        activeLocation,
                        setActiveLocation,
                        "employeeScore"
                    )
                }
            >
                <FontAwesomeIcon icon={faCheck} />
            </NavLink>
            <NavLink
                title="Skill Matrix Table Page"
                to="/skill-matrix"
                className={css.sidebarNavItem}
                activeClassName={
                    activeLocation.skillMatrix ? css.sidebarActiveNavItem : ""
                }
                onClick={() =>
                    handleNavItemClick(
                        activeLocation,
                        setActiveLocation,
                        "skillMatrix"
                    )
                }
            >
                <FontAwesomeIcon icon={faTableList} />
            </NavLink>
        </div>
    );
};

export default SidebarComponent;
