import React, { useState } from "react";
import css from "./DrawerComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import TeamForm from "../TeamForm/TeamForm";
import FormAdd from "../FormAdd/FormAdd";

const DrawerComponent = ({
    showDrawer,
    setShowDrawer,
    form2Visible,
    form1Visible
}) => {
    return (
        <div className={css.drawer_container}>
            <div className={css.drawerheading}>
                <span>
                    {" "}
                    <FontAwesomeIcon
                        icon={faTimes}
                        size="lg"
                        onClick={() => {
                            setShowDrawer(!showDrawer);
                        }}
                    />
                </span>
                <hr />
                {form1Visible && <TeamForm />}
                {form2Visible && <FormAdd />}
            </div>
        </div>
    );
};

export default DrawerComponent;
